--- 
title: responder_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - responder_gateways
  - rtbfabric
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

Creates, updates, deletes, gets or lists a <code>responder_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="responder_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rtbfabric.responder_gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_responder_gateway"
    values={[
        { label: 'get_responder_gateway', value: 'get_responder_gateway' },
        { label: 'list_responder_gateways', value: 'list_responder_gateways' }
    ]}
>
<TabItem value="get_responder_gateway">

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
    <td><CopyableCode code="active_links_count" /></td>
    <td><code>integer</code></td>
    <td>The count of active links for the responder gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the responder gateway was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the responder gateway. (pattern: &lt;code&gt;&#91;A-Za-z0-9 &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name of the responder gateway. (pattern: &lt;code&gt;(?:&#91;a-z0-9&#93;(?:&#91;a-z0-9-&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?)(?:\.(?:&#91;a-z0-9&#93;(?:&#91;a-z0-9-&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?))+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="external_inbound_endpoint" /></td>
    <td><code>string</code></td>
    <td>The external inbound endpoint for the responder gateway. (pattern: &lt;code&gt;(?:&#91;a-z0-9&#93;(?:&#91;a-z0-9-&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?)(?:\.(?:&#91;a-z0-9&#93;(?:&#91;a-z0-9-&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?))+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway. (pattern: &lt;code&gt;rtb-gw-&#91;a-z0-9-&#93;&#123;1,25&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_type" /></td>
    <td><code>string</code></td>
    <td>The type of gateway. (EXTERNAL, INTERNAL)</td>
</tr>
<tr>
    <td><CopyableCode code="links_requested_count" /></td>
    <td><code>integer</code></td>
    <td>The count of requested links waiting for the responder gateway to accept or reject.</td>
</tr>
<tr>
    <td><CopyableCode code="listener_config" /></td>
    <td><code>object</code></td>
    <td>Listener configuration for the protocols (HTTP, HTTPS, or both) accepted by the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_endpoint_configuration" /></td>
    <td><code>object</code></td>
    <td>Describes the configuration of a managed endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The networking port.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The networking protocol. (HTTP, HTTPS)</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_ids" /></td>
    <td><code>array</code></td>
    <td>The unique identifiers of the security groups.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the request. (PENDING_CREATION, ACTIVE, PENDING_DELETION, DELETED, ERROR, PENDING_UPDATE, ISOLATED, PENDING_ISOLATION, PENDING_RESTORATION)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_ids" /></td>
    <td><code>array</code></td>
    <td>The unique identifiers of the subnets.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of the key-value pairs for the tag or tags assigned to the specified resource.</td>
</tr>
<tr>
    <td><CopyableCode code="total_links_count" /></td>
    <td><code>integer</code></td>
    <td>The total count of links for the responder gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="trust_store_configuration" /></td>
    <td><code>object</code></td>
    <td>Describes the configuration of a trust store.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the responder gateway was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Virtual Private Cloud (VPC). (pattern: &lt;code&gt;vpc-&#91;a-f0-9&#93;&#123;8,17&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_responder_gateways">

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
    <td><CopyableCode code="gateway_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateways.</td>
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
    <td><a href="#get_responder_gateway"><CopyableCode code="get_responder_gateway" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a responder gateway.</td>
</tr>
<tr>
    <td><a href="#list_responder_gateways"><CopyableCode code="list_responder_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists reponder gateways.</td>
</tr>
<tr>
    <td><a href="#create_responder_gateway"><CopyableCode code="create_responder_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vpcId"><code>vpcId</code></a>, <a href="#parameter-subnetIds"><code>subnetIds</code></a>, <a href="#parameter-securityGroupIds"><code>securityGroupIds</code></a>, <a href="#parameter-port"><code>port</code></a>, <a href="#parameter-protocol"><code>protocol</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates a responder gateway. A domain name or managed endpoint is required.</td>
</tr>
<tr>
    <td><a href="#update_responder_gateway"><CopyableCode code="update_responder_gateway" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-port"><code>port</code></a>, <a href="#parameter-protocol"><code>protocol</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Updates a responder gateway.</td>
</tr>
<tr>
    <td><a href="#delete_responder_gateway"><CopyableCode code="delete_responder_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a responder gateway.</td>
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
<tr id="parameter-gateway_id">
    <td><CopyableCode code="gateway_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_responder_gateway"
    values={[
        { label: 'get_responder_gateway', value: 'get_responder_gateway' },
        { label: 'list_responder_gateways', value: 'list_responder_gateways' }
    ]}
>
<TabItem value="get_responder_gateway">

Retrieves information about a responder gateway.

```sql
SELECT
active_links_count,
created_at,
description,
domain_name,
external_inbound_endpoint,
gateway_id,
gateway_type,
links_requested_count,
listener_config,
managed_endpoint_configuration,
port,
protocol,
security_group_ids,
status,
subnet_ids,
tags,
total_links_count,
trust_store_configuration,
updated_at,
vpc_id
FROM aws.rtbfabric.responder_gateways
WHERE gateway_id = '{{ gateway_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_responder_gateways">

Lists reponder gateways.

```sql
SELECT
gateway_id
FROM aws.rtbfabric.responder_gateways
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_responder_gateway"
    values={[
        { label: 'create_responder_gateway', value: 'create_responder_gateway' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_responder_gateway">

Creates a responder gateway. A domain name or managed endpoint is required.

```sql
INSERT INTO aws.rtbfabric.responder_gateways (
vpcId,
subnetIds,
securityGroupIds,
domainName,
port,
protocol,
listenerConfig,
trustStoreConfiguration,
managedEndpointConfiguration,
clientToken,
description,
tags,
gatewayType,
region
)
SELECT 
'{{ vpcId }}' /* required */,
'{{ subnetIds }}' /* required */,
'{{ securityGroupIds }}' /* required */,
'{{ domainName }}',
{{ port }} /* required */,
'{{ protocol }}' /* required */,
'{{ listenerConfig }}',
'{{ trustStoreConfiguration }}',
'{{ managedEndpointConfiguration }}',
'{{ clientToken }}' /* required */,
'{{ description }}',
'{{ tags }}',
'{{ gatewayType }}',
'{{ region }}'
RETURNING
external_inbound_endpoint,
gateway_id,
listener_config,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: responder_gateways
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the responder_gateways resource.
    - name: vpcId
      value: "{{ vpcId }}"
    - name: subnetIds
      value:
        - "{{ subnetIds }}"
    - name: securityGroupIds
      value:
        - "{{ securityGroupIds }}"
    - name: domainName
      value: "{{ domainName }}"
    - name: port
      value: {{ port }}
    - name: protocol
      value: "{{ protocol }}"
      valid_values: ['HTTP', 'HTTPS']
    - name: listenerConfig
      description: |
        Listener configuration for the protocols (HTTP, HTTPS, or both) accepted by the gateway.
      value:
        protocols:
          - "{{ protocols }}"
    - name: trustStoreConfiguration
      description: |
        Describes the configuration of a trust store.
      value:
        certificateAuthorityCertificates:
          - "{{ certificateAuthorityCertificates }}"
    - name: managedEndpointConfiguration
      description: |
        Describes the configuration of a managed endpoint.
      value:
        autoScalingGroups:
          autoScalingGroupNames:
            - "{{ autoScalingGroupNames }}"
          roleArn: "{{ roleArn }}"
          healthCheckConfig:
            port: {{ port }}
            path: "{{ path }}"
            protocol: "{{ protocol }}"
            timeoutMs: {{ timeoutMs }}
            intervalSeconds: {{ intervalSeconds }}
            statusCodeMatcher: "{{ statusCodeMatcher }}"
            healthyThresholdCount: {{ healthyThresholdCount }}
            unhealthyThresholdCount: {{ unhealthyThresholdCount }}
        eksEndpoints:
          endpointsResourceName: "{{ endpointsResourceName }}"
          endpointsResourceNamespace: "{{ endpointsResourceNamespace }}"
          clusterApiServerEndpointUri: "{{ clusterApiServerEndpointUri }}"
          clusterApiServerCaCertificateChain: "{{ clusterApiServerCaCertificateChain }}"
          clusterName: "{{ clusterName }}"
          roleArn: "{{ roleArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
    - name: gatewayType
      value: "{{ gatewayType }}"
      description: |
        The type of gateway.
      valid_values: ['EXTERNAL', 'INTERNAL']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_responder_gateway"
    values={[
        { label: 'update_responder_gateway', value: 'update_responder_gateway' }
    ]}
>
<TabItem value="update_responder_gateway">

Updates a responder gateway.

```sql
UPDATE aws.rtbfabric.responder_gateways
SET 
domainName = '{{ domainName }}',
port = {{ port }},
protocol = '{{ protocol }}',
listenerConfig = '{{ listenerConfig }}',
trustStoreConfiguration = '{{ trustStoreConfiguration }}',
managedEndpointConfiguration = '{{ managedEndpointConfiguration }}',
clientToken = '{{ clientToken }}',
description = '{{ description }}'
WHERE 
gateway_id = '{{ gateway_id }}' --required
AND region = '{{ region }}' --required
AND port = '{{ port }}' --required
AND protocol = '{{ protocol }}' --required
AND clientToken = '{{ clientToken }}' --required
RETURNING
gateway_id,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_responder_gateway"
    values={[
        { label: 'delete_responder_gateway', value: 'delete_responder_gateway' }
    ]}
>
<TabItem value="delete_responder_gateway">

Deletes a responder gateway.

```sql
DELETE FROM aws.rtbfabric.responder_gateways
WHERE gateway_id = '{{ gateway_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
