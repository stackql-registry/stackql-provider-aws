--- 
title: listeners
hide_title: false
hide_table_of_contents: false
keywords:
  - listeners
  - elbv2
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>listeners</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="listeners" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elbv2.listeners" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_listeners"
    values={[
        { label: 'describe_listeners', value: 'describe_listeners' }
    ]}
>
<TabItem value="describe_listeners">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="AlpnPolicy" /></td>
    <td><code>string</code></td>
    <td>&#91;TLS listener&#93; The name of the Application-Layer Protocol Negotiation (ALPN) policy.</td>
</tr>
<tr>
    <td><CopyableCode code="Certificates" /></td>
    <td><code>string</code></td>
    <td>&#91;HTTPS or TLS listener&#93; The default certificate for the listener.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultActions" /></td>
    <td><code>string</code></td>
    <td>The default actions for the listener.</td>
</tr>
<tr>
    <td><CopyableCode code="ListenerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the listener.</td>
</tr>
<tr>
    <td><CopyableCode code="LoadBalancerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="MutualAuthentication" /></td>
    <td><code>string</code></td>
    <td>The mutual authentication configuration information.</td>
</tr>
<tr>
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port on which the load balancer is listening.</td>
</tr>
<tr>
    <td><CopyableCode code="Protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol for connections from clients to the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="SslPolicy" /></td>
    <td><code>string</code></td>
    <td>&#91;HTTPS or TLS listener&#93; The security policy that defines which protocols and ciphers are supported.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_listeners"><CopyableCode code="describe_listeners" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LoadBalancerArn"><code>LoadBalancerArn</code></a>, <a href="#parameter-ListenerArns"><code>ListenerArns</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.</td>
</tr>
<tr>
    <td><a href="#create_listener"><CopyableCode code="create_listener" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LoadBalancerArn"><code>LoadBalancerArn</code></a>, <a href="#parameter-DefaultActions"><code>DefaultActions</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Protocol"><code>Protocol</code></a>, <a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-SslPolicy"><code>SslPolicy</code></a>, <a href="#parameter-Certificates"><code>Certificates</code></a>, <a href="#parameter-AlpnPolicy"><code>AlpnPolicy</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-MutualAuthentication"><code>MutualAuthentication</code></a></td>
    <td>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. For more information, see the following: Listeners for your Application Load Balancers Listeners for your Network Load Balancers Listeners for your Gateway Load Balancers This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.</td>
</tr>
<tr>
    <td><a href="#modify_listener"><CopyableCode code="modify_listener" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ListenerArn"><code>ListenerArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Port"><code>Port</code></a>, <a href="#parameter-Protocol"><code>Protocol</code></a>, <a href="#parameter-SslPolicy"><code>SslPolicy</code></a>, <a href="#parameter-Certificates"><code>Certificates</code></a>, <a href="#parameter-DefaultActions"><code>DefaultActions</code></a>, <a href="#parameter-AlpnPolicy"><code>AlpnPolicy</code></a>, <a href="#parameter-MutualAuthentication"><code>MutualAuthentication</code></a></td>
    <td>Replaces the specified properties of the specified listener. Any properties that you do not specify remain unchanged. Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP to TLS, you must add the security policy and default certificate properties. To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</td>
</tr>
<tr>
    <td><a href="#delete_listener"><CopyableCode code="delete_listener" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ListenerArn"><code>ListenerArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified listener. Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-DefaultActions">
    <td><CopyableCode code="DefaultActions" /></td>
    <td><code>array</code></td>
    <td>The actions for the default rule.</td>
</tr>
<tr id="parameter-ListenerArn">
    <td><CopyableCode code="ListenerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the listener.</td>
</tr>
<tr id="parameter-LoadBalancerArn">
    <td><CopyableCode code="LoadBalancerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the load balancer.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AlpnPolicy">
    <td><CopyableCode code="AlpnPolicy" /></td>
    <td><code>array</code></td>
    <td>&#91;TLS listeners&#93; The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values: HTTP1Only HTTP2Only HTTP2Optional HTTP2Preferred None For more information, see ALPN policies in the Network Load Balancers Guide.</td>
</tr>
<tr id="parameter-Certificates">
    <td><CopyableCode code="Certificates" /></td>
    <td><code>array</code></td>
    <td>&#91;HTTPS and TLS listeners&#93; The default certificate for the listener. You must provide exactly one certificate. Set CertificateArn to the certificate ARN but do not set IsDefault.</td>
</tr>
<tr id="parameter-DefaultActions">
    <td><CopyableCode code="DefaultActions" /></td>
    <td><code>array</code></td>
    <td>The actions for the default rule.</td>
</tr>
<tr id="parameter-ListenerArns">
    <td><CopyableCode code="ListenerArns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARN) of the listeners.</td>
</tr>
<tr id="parameter-LoadBalancerArn">
    <td><CopyableCode code="LoadBalancerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the load balancer.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. (You received this marker from a previous call.)</td>
</tr>
<tr id="parameter-MutualAuthentication">
    <td><CopyableCode code="MutualAuthentication" /></td>
    <td><code>object</code></td>
    <td>&#91;HTTPS listeners&#93; The mutual authentication configuration information.</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with this call.</td>
</tr>
<tr id="parameter-Port">
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port for connections from clients to the load balancer. You can't specify a port for a Gateway Load Balancer.</td>
</tr>
<tr id="parameter-Protocol">
    <td><CopyableCode code="Protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol for connections from clients to the load balancer. Application Load Balancers support the HTTP and HTTPS protocols. Network Load Balancers support the TCP, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC protocols. You can’t change the protocol to UDP, TCP_UDP, QUIC, or TCP_QUIC if dual-stack mode is enabled. You can't specify a protocol for a Gateway Load Balancer.</td>
</tr>
<tr id="parameter-SslPolicy">
    <td><CopyableCode code="SslPolicy" /></td>
    <td><code>string</code></td>
    <td>&#91;HTTPS and TLS listeners&#93; The security policy that defines which protocols and ciphers are supported. For more information, see Security policies in the Application Load Balancers Guide or Security policies in the Network Load Balancers Guide.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the listener.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_listeners"
    values={[
        { label: 'describe_listeners', value: 'describe_listeners' }
    ]}
>
<TabItem value="describe_listeners">

Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.

```sql
SELECT
AlpnPolicy,
Certificates,
DefaultActions,
ListenerArn,
LoadBalancerArn,
MutualAuthentication,
Port,
Protocol,
SslPolicy
FROM aws.elbv2.listeners
WHERE region = '{{ region }}' -- required
AND LoadBalancerArn = '{{ LoadBalancerArn }}'
AND ListenerArns = '{{ ListenerArns }}'
AND Marker = '{{ Marker }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_listener"
    values={[
        { label: 'create_listener', value: 'create_listener' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_listener">

Creates a listener for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. For more information, see the following: Listeners for your Application Load Balancers Listeners for your Network Load Balancers Listeners for your Gateway Load Balancers This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.

```sql
INSERT INTO aws.elbv2.listeners (
LoadBalancerArn,
DefaultActions,
region,
Protocol,
Port,
SslPolicy,
Certificates,
AlpnPolicy,
Tags,
MutualAuthentication
)
SELECT 
'{{ LoadBalancerArn }}',
'{{ DefaultActions }}',
'{{ region }}',
'{{ Protocol }}',
'{{ Port }}',
'{{ SslPolicy }}',
'{{ Certificates }}',
'{{ AlpnPolicy }}',
'{{ Tags }}',
'{{ MutualAuthentication }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: listeners
  props:
    - name: LoadBalancerArn
      value: "{{ LoadBalancerArn }}"
      description: Required parameter for the listeners resource.
    - name: DefaultActions
      value: "{{ DefaultActions }}"
      description: Required parameter for the listeners resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the listeners resource.
    - name: Protocol
      value: "{{ Protocol }}"
      description: The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC. You can’t specify the UDP, TCP_UDP, QUIC, or TCP_QUIC protocol if dual-stack mode is enabled. You can't specify a protocol for a Gateway Load Balancer.
      description: The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC. You can’t specify the UDP, TCP_UDP, QUIC, or TCP_QUIC protocol if dual-stack mode is enabled. You can't specify a protocol for a Gateway Load Balancer.
    - name: Port
      value: {{ Port }}
      description: The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer.
      description: The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer.
    - name: SslPolicy
      value: "{{ SslPolicy }}"
      description: [HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported. For more information, see Security policies in the Application Load Balancers Guide and Security policies in the Network Load Balancers Guide.
      description: [HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported. For more information, see Security policies in the Application Load Balancers Guide and Security policies in the Network Load Balancers Guide.
    - name: Certificates
      value: "{{ Certificates }}"
      description: [HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set CertificateArn to the certificate ARN but do not set IsDefault.
      description: [HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set CertificateArn to the certificate ARN but do not set IsDefault.
    - name: AlpnPolicy
      value: "{{ AlpnPolicy }}"
      description: [TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values: HTTP1Only HTTP2Only HTTP2Optional HTTP2Preferred None For more information, see ALPN policies in the Network Load Balancers Guide.
      description: [TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values: HTTP1Only HTTP2Only HTTP2Optional HTTP2Preferred None For more information, see ALPN policies in the Network Load Balancers Guide.
    - name: Tags
      value: "{{ Tags }}"
      description: The tags to assign to the listener.
      description: The tags to assign to the listener.
    - name: MutualAuthentication
      value: "{{ MutualAuthentication }}"
      description: [HTTPS listeners] The mutual authentication configuration information.
      description: [HTTPS listeners] The mutual authentication configuration information.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_listener"
    values={[
        { label: 'modify_listener', value: 'modify_listener' }
    ]}
>
<TabItem value="modify_listener">

Replaces the specified properties of the specified listener. Any properties that you do not specify remain unchanged. Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP to TLS, you must add the security policy and default certificate properties. To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.

```sql
UPDATE aws.elbv2.listeners
SET 
-- No updatable properties
WHERE 
ListenerArn = '{{ ListenerArn }}' --required
AND region = '{{ region }}' --required
AND Port = '{{ Port}}'
AND Protocol = '{{ Protocol}}'
AND SslPolicy = '{{ SslPolicy}}'
AND Certificates = '{{ Certificates}}'
AND DefaultActions = '{{ DefaultActions}}'
AND AlpnPolicy = '{{ AlpnPolicy}}'
AND MutualAuthentication = '{{ MutualAuthentication}}'
RETURNING
line_items;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_listener"
    values={[
        { label: 'delete_listener', value: 'delete_listener' }
    ]}
>
<TabItem value="delete_listener">

Deletes the specified listener. Alternatively, your listener is deleted when you delete the load balancer to which it is attached.

```sql
DELETE FROM aws.elbv2.listeners
WHERE ListenerArn = '{{ ListenerArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
