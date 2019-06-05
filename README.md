# Common Address Redundancy Protocol (CARP)

Este projeto visa mostrar uma forma mais simples de Alta Disponibilidade
utilizando protocolo de redundância. Descubra como utilizar o protocolo CARP e
aplicá-lo em servidores OpenBSD.

CARP (Common Address Redundancy Protocol) é um protocolo que permite que múltiplos
hosts (até 255) em uma rede local compartilhem de um mesmo endereço IP. Algumas de
suas funcionalidades são similares ao VRRP, mas o CARP difere em alguns aspectos 
significantes: CARP foi desenhado para prover segurança e ser um protocolo 
independente (assim ele pode suportar IPv4 e IPv6), pode-se trabalhar com load 
balancing e com isto alta disponibilidade. 

Mais informações em https://www.openbsd.org/faq/pf/carp.html
