% Retrato da bilheteria ao final da demonstração.
capacidade(aurora, 2).
capacidade(horizonte, 5).
vendidos(aurora, 2).
vendidos(horizonte, 1).
genero(aurora, rock).
genero(horizonte, pop).
cidade(aurora, ponta_grossa).
cidade(horizonte, castro).

vagas(Show, N) :-
    capacidade(Show, C), vendidos(Show, V), N is C - V.
disponivel(Show) :- vagas(Show, N), N > 0.
esgotado(Show) :- vagas(Show, 0).
opcao(Genero, Show) :- genero(Show, Genero), disponivel(Show).
