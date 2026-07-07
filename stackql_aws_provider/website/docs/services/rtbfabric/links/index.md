--- 
title: links
hide_title: false
hide_table_of_contents: false
keywords:
  - links
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

Creates, updates, deletes, gets or lists a <code>links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rtbfabric.links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_link"
    values={[
        { label: 'get_link', value: 'get_link' },
        { label: 'list_links', value: 'list_links' }
    ]}
>
<TabItem value="get_link">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Describes the attributes of a link.</td>
</tr>
<tr>
    <td><CopyableCode code="connectivityType" /></td>
    <td><code>string</code></td>
    <td>The connectivity type of the link. (DEFAULT, PUBLIC_INGRESS, PUBLIC_EGRESS, EXTERNAL_INBOUND)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the link was created.</td>
</tr>
<tr>
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction of the link. (RESPONSE, REQUEST)</td>
</tr>
<tr>
    <td><CopyableCode code="flowModules" /></td>
    <td><code>array</code></td>
    <td>The configuration of flow modules.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway. (pattern: &lt;code&gt;rtb-gw-&#91;a-z0-9-&#93;&#123;1,25&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="httpResponderAllowed" /></td>
    <td><code>boolean</code></td>
    <td>Boolean to specify if an HTTP responder is allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="linkId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the link. (pattern: &lt;code&gt;link-&#91;a-z0-9-&#93;&#123;1,25&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logSettings" /></td>
    <td><code>object</code></td>
    <td>Describes the settings for a link log.</td>
</tr>
<tr>
    <td><CopyableCode code="peerGatewayId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the peer gateway. (pattern: &lt;code&gt;rtb-gw-&#91;a-z0-9-&#93;&#123;1,25&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingFlowModules" /></td>
    <td><code>array</code></td>
    <td>The configuration of pending flow modules.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the link. (PENDING_CREATION, PENDING_REQUEST, REQUESTED, ACCEPTED, ACTIVE, REJECTED, FAILED, PENDING_DELETION, DELETED, PENDING_UPDATE, PENDING_ISOLATION, ISOLATED, PENDING_RESTORATION)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of the key-value pairs for the tag or tags assigned to the specified resource.</td>
</tr>
<tr>
    <td><CopyableCode code="timeoutInMillis" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timeout value in milliseconds.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the link was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_links">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Describes the attributes of a link.</td>
</tr>
<tr>
    <td><CopyableCode code="connectivityType" /></td>
    <td><code>string</code></td>
    <td>The connectivity type of the link. (DEFAULT, PUBLIC_INGRESS, PUBLIC_EGRESS, EXTERNAL_INBOUND)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the link was created.</td>
</tr>
<tr>
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction of the link. (RESPONSE, REQUEST)</td>
</tr>
<tr>
    <td><CopyableCode code="flowModules" /></td>
    <td><code>array</code></td>
    <td>Describes the configuration of flow modules.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway. (pattern: &lt;code&gt;rtb-gw-&#91;a-z0-9-&#93;&#123;1,25&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="linkId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the link. (pattern: &lt;code&gt;link-&#91;a-z0-9-&#93;&#123;1,25&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logSettings" /></td>
    <td><code>object</code></td>
    <td>Describes the settings for a link log.</td>
</tr>
<tr>
    <td><CopyableCode code="peerGatewayId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the peer gateway. (pattern: &lt;code&gt;rtb-gw-&#91;a-z0-9-&#93;&#123;1,25&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingFlowModules" /></td>
    <td><code>array</code></td>
    <td>Describes the configuration of pending flow modules.</td>
</tr>
<tr>
    <td><CopyableCode code="publicEndpoint" /></td>
    <td><code>string</code></td>
    <td>The public endpoint of the outbound link. (pattern: &lt;code&gt;(https|http):​//.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the link. (PENDING_CREATION, PENDING_REQUEST, REQUESTED, ACCEPTED, ACTIVE, REJECTED, FAILED, PENDING_DELETION, DELETED, PENDING_UPDATE, PENDING_ISOLATION, ISOLATED, PENDING_RESTORATION)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of the key-value pairs of the tag or tags to assign to the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the link was updated.</td>
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
    <td><a href="#get_link"><CopyableCode code="get_link" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a link between gateways. Returns detailed information about the link configuration, status, and associated gateways.</td>
</tr>
<tr>
    <td><a href="#list_links"><CopyableCode code="list_links" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists links associated with gateways. Returns a list of all links for the specified gateways, including their status and configuration details.</td>
</tr>
<tr>
    <td><a href="#create_link"><CopyableCode code="create_link" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-peerGatewayId"><code>peerGatewayId</code></a>, <a href="#parameter-logSettings"><code>logSettings</code></a></td>
    <td></td>
    <td>Creates a new link between gateways. Establishes a connection that allows gateways to communicate and exchange bid requests and responses.</td>
</tr>
<tr>
    <td><a href="#update_link_module_flow"><CopyableCode code="update_link_module_flow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-modules"><code>modules</code></a></td>
    <td></td>
    <td>Updates a link module flow.</td>
</tr>
<tr>
    <td><a href="#update_link"><CopyableCode code="update_link" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration of a link between gateways. Allows you to modify settings and parameters for an existing link.</td>
</tr>
<tr>
    <td><a href="#delete_link"><CopyableCode code="delete_link" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a link between gateways. Permanently removes the connection between gateways. This action cannot be undone.</td>
</tr>
<tr>
    <td><a href="#accept_link"><CopyableCode code="accept_link" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logSettings"><code>logSettings</code></a></td>
    <td></td>
    <td>Accepts a link request between gateways. When a requester gateway requests to link with a responder gateway, the responder can use this operation to accept the link request and establish the connection.</td>
</tr>
<tr>
    <td><a href="#reject_link"><CopyableCode code="reject_link" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Rejects a link request between gateways. When a requester gateway requests to link with a responder gateway, the responder can use this operation to decline the link request.</td>
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
<tr id="parameter-link_id">
    <td><CopyableCode code="link_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the link.</td>
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
    defaultValue="get_link"
    values={[
        { label: 'get_link', value: 'get_link' },
        { label: 'list_links', value: 'list_links' }
    ]}
>
<TabItem value="get_link">

Retrieves information about a link between gateways. Returns detailed information about the link configuration, status, and associated gateways.

```sql
SELECT
attributes,
connectivityType,
createdAt,
direction,
flowModules,
gatewayId,
httpResponderAllowed,
linkId,
logSettings,
peerGatewayId,
pendingFlowModules,
status,
tags,
timeoutInMillis,
updatedAt
FROM aws.rtbfabric.links
WHERE gateway_id = '{{ gateway_id }}' -- required
AND link_id = '{{ link_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_links">

Lists links associated with gateways. Returns a list of all links for the specified gateways, including their status and configuration details.

```sql
SELECT
attributes,
connectivityType,
createdAt,
direction,
flowModules,
gatewayId,
linkId,
logSettings,
peerGatewayId,
pendingFlowModules,
publicEndpoint,
status,
tags,
updatedAt
FROM aws.rtbfabric.links
WHERE gateway_id = '{{ gateway_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_link"
    values={[
        { label: 'create_link', value: 'create_link' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_link">

Creates a new link between gateways. Establishes a connection that allows gateways to communicate and exchange bid requests and responses.

```sql
INSERT INTO aws.rtbfabric.links (
peerGatewayId,
attributes,
httpResponderAllowed,
tags,
logSettings,
timeoutInMillis,
gateway_id,
region
)
SELECT 
'{{ peerGatewayId }}' /* required */,
'{{ attributes }}',
{{ httpResponderAllowed }},
'{{ tags }}',
'{{ logSettings }}' /* required */,
{{ timeoutInMillis }},
'{{ gateway_id }}',
'{{ region }}'
RETURNING
attributes,
connectivityType,
createdAt,
customerProvidedId,
direction,
flowModules,
gatewayId,
linkId,
logSettings,
peerGatewayId,
pendingFlowModules,
status,
updatedAt
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: links
  props:
    - name: gateway_id
      value: "{{ gateway_id }}"
      description: Required parameter for the links resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the links resource.
    - name: peerGatewayId
      value: "{{ peerGatewayId }}"
    - name: attributes
      description: |
        Describes the attributes of a link.
      value:
        responderErrorMasking:
          - httpCode: "{{ httpCode }}"
            action: "{{ action }}"
            loggingTypes: "{{ loggingTypes }}"
            responseLoggingPercentage: {{ responseLoggingPercentage }}
        customerProvidedId: "{{ customerProvidedId }}"
    - name: httpResponderAllowed
      value: {{ httpResponderAllowed }}
    - name: tags
      value: "{{ tags }}"
    - name: logSettings
      description: |
        Describes the settings for a link log.
      value:
        applicationLogs:
          sampling:
            errorLog: {{ errorLog }}
            filterLog: {{ filterLog }}
    - name: timeoutInMillis
      value: {{ timeoutInMillis }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_link_module_flow"
    values={[
        { label: 'update_link_module_flow', value: 'update_link_module_flow' },
        { label: 'update_link', value: 'update_link' }
    ]}
>
<TabItem value="update_link_module_flow">

Updates a link module flow.

```sql
UPDATE aws.rtbfabric.links
SET 
clientToken = '{{ clientToken }}',
modules = '{{ modules }}'
WHERE 
gateway_id = '{{ gateway_id }}' --required
AND link_id = '{{ link_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}' --required
AND modules = '{{ modules }}' --required
RETURNING
gatewayId,
linkId,
status;
```
</TabItem>
<TabItem value="update_link">

Updates the configuration of a link between gateways. Allows you to modify settings and parameters for an existing link.

```sql
UPDATE aws.rtbfabric.links
SET 
logSettings = '{{ logSettings }}',
timeoutInMillis = {{ timeoutInMillis }}
WHERE 
gateway_id = '{{ gateway_id }}' --required
AND link_id = '{{ link_id }}' --required
AND region = '{{ region }}' --required
RETURNING
linkId,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_link"
    values={[
        { label: 'delete_link', value: 'delete_link' }
    ]}
>
<TabItem value="delete_link">

Deletes a link between gateways. Permanently removes the connection between gateways. This action cannot be undone.

```sql
DELETE FROM aws.rtbfabric.links
WHERE gateway_id = '{{ gateway_id }}' --required
AND link_id = '{{ link_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_link"
    values={[
        { label: 'accept_link', value: 'accept_link' },
        { label: 'reject_link', value: 'reject_link' }
    ]}
>
<TabItem value="accept_link">

Accepts a link request between gateways. When a requester gateway requests to link with a responder gateway, the responder can use this operation to accept the link request and establish the connection.

```sql
EXEC aws.rtbfabric.links.accept_link 
@gateway_id='{{ gateway_id }}' --required, 
@link_id='{{ link_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"attributes": "{{ attributes }}", 
"logSettings": "{{ logSettings }}", 
"timeoutInMillis": {{ timeoutInMillis }}
}'
;
```
</TabItem>
<TabItem value="reject_link">

Rejects a link request between gateways. When a requester gateway requests to link with a responder gateway, the responder can use this operation to decline the link request.

```sql
EXEC aws.rtbfabric.links.reject_link 
@gateway_id='{{ gateway_id }}' --required, 
@link_id='{{ link_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
