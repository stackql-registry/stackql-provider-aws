--- 
title: proxies
hide_title: false
hide_table_of_contents: false
keywords:
  - proxies
  - network_firewall
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

Creates, updates, deletes, gets or lists a <code>proxies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="proxies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.proxies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_proxy"
    values={[
        { label: 'describe_proxy', value: 'describe_proxy' }
    ]}
>
<TabItem value="describe_proxy">

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
    <td><CopyableCode code="Proxy" /></td>
    <td><code>object</code></td>
    <td>Proxy attached to a NAT gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateToken" /></td>
    <td><code>string</code></td>
    <td>A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy. The token marks the state of the proxy resource at the time of the request. To make changes to the proxy, you provide the token in your request. Network Firewall uses the token to ensure that the proxy hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the proxy again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. (pattern: &lt;code&gt;^(&#91;0-9a-f&#93;&#123;8&#125;)-(&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;(&#91;0-9a-f&#93;&#123;12&#125;)$&lt;/code&gt;)</td>
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
    <td><a href="#describe_proxy"><CopyableCode code="describe_proxy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the data objects for the specified proxy.</td>
</tr>
<tr>
    <td><a href="#create_proxy"><CopyableCode code="create_proxy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProxyName"><code>ProxyName</code></a>, <a href="#parameter-NatGatewayId"><code>NatGatewayId</code></a>, <a href="#parameter-TlsInterceptProperties"><code>TlsInterceptProperties</code></a></td>
    <td></td>
    <td>Creates an Network Firewall Proxy Attaches a Proxy configuration to a NAT Gateway. To manage a proxy's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about proxies, use ListProxies and DescribeProxy.</td>
</tr>
<tr>
    <td><a href="#update_proxy"><CopyableCode code="update_proxy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NatGatewayId"><code>NatGatewayId</code></a>, <a href="#parameter-UpdateToken"><code>UpdateToken</code></a></td>
    <td></td>
    <td>Updates the properties of the specified proxy.</td>
</tr>
<tr>
    <td><a href="#delete_proxy"><CopyableCode code="delete_proxy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Proxy. Detaches a Proxy configuration from a NAT Gateway.</td>
</tr>
<tr>
    <td><a href="#list_proxies"><CopyableCode code="list_proxies" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the metadata for the proxies that you have defined. Depending on your setting for max results and the number of proxies, a single call might not return the full list.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_proxy"
    values={[
        { label: 'describe_proxy', value: 'describe_proxy' }
    ]}
>
<TabItem value="describe_proxy">

Returns the data objects for the specified proxy.

```sql
SELECT
Proxy,
UpdateToken
FROM aws.network_firewall.proxies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_proxy"
    values={[
        { label: 'create_proxy', value: 'create_proxy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_proxy">

Creates an Network Firewall Proxy Attaches a Proxy configuration to a NAT Gateway. To manage a proxy's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about proxies, use ListProxies and DescribeProxy.

```sql
INSERT INTO aws.network_firewall.proxies (
ProxyName,
NatGatewayId,
ProxyConfigurationName,
ProxyConfigurationArn,
ListenerProperties,
TlsInterceptProperties,
Tags,
region
)
SELECT 
'{{ ProxyName }}' /* required */,
'{{ NatGatewayId }}' /* required */,
'{{ ProxyConfigurationName }}',
'{{ ProxyConfigurationArn }}',
'{{ ListenerProperties }}',
'{{ TlsInterceptProperties }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
Proxy,
UpdateToken
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: proxies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the proxies resource.
    - name: ProxyName
      value: "{{ ProxyName }}"
      description: |
        The descriptive name of the proxy. You can't change the name of a proxy after you create it.
    - name: NatGatewayId
      value: "{{ NatGatewayId }}"
      description: |
        A unique identifier for the NAT gateway to use with proxy resources.
    - name: ProxyConfigurationName
      value: "{{ ProxyConfigurationName }}"
      description: |
        The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it. You must specify the ARN or the name, and you can specify both.
    - name: ProxyConfigurationArn
      value: "{{ ProxyConfigurationArn }}"
      description: |
        The Amazon Resource Name (ARN) of a proxy configuration. You must specify the ARN or the name, and you can specify both.
    - name: ListenerProperties
      description: |
        Listener properties for HTTP and HTTPS traffic.
      value:
        - Port: {{ Port }}
          Type: "{{ Type }}"
    - name: TlsInterceptProperties
      description: |
        TLS decryption on traffic to filter on attributes in the HTTP header.
      value:
        PcaArn: "{{ PcaArn }}"
        TlsInterceptMode: "{{ TlsInterceptMode }}"
    - name: Tags
      description: |
        The key:value pairs to associate with the resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_proxy"
    values={[
        { label: 'update_proxy', value: 'update_proxy' }
    ]}
>
<TabItem value="update_proxy">

Updates the properties of the specified proxy.

```sql
UPDATE aws.network_firewall.proxies
SET 
NatGatewayId = '{{ NatGatewayId }}',
ProxyName = '{{ ProxyName }}',
ProxyArn = '{{ ProxyArn }}',
ListenerPropertiesToAdd = '{{ ListenerPropertiesToAdd }}',
ListenerPropertiesToRemove = '{{ ListenerPropertiesToRemove }}',
TlsInterceptProperties = '{{ TlsInterceptProperties }}',
UpdateToken = '{{ UpdateToken }}'
WHERE 
region = '{{ region }}' --required
AND NatGatewayId = '{{ NatGatewayId }}' --required
AND UpdateToken = '{{ UpdateToken }}' --required
RETURNING
Proxy,
UpdateToken;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_proxy"
    values={[
        { label: 'delete_proxy', value: 'delete_proxy' }
    ]}
>
<TabItem value="delete_proxy">

Deletes the specified Proxy. Detaches a Proxy configuration from a NAT Gateway.

```sql
DELETE FROM aws.network_firewall.proxies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_proxies"
    values={[
        { label: 'list_proxies', value: 'list_proxies' }
    ]}
>
<TabItem value="list_proxies">

Retrieves the metadata for the proxies that you have defined. Depending on your setting for max results and the number of proxies, a single call might not return the full list.

```sql
EXEC aws.network_firewall.proxies.list_proxies 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
