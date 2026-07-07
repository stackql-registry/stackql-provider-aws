--- 
title: inbound_external_links
hide_title: false
hide_table_of_contents: false
keywords:
  - inbound_external_links
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

Creates, updates, deletes, gets or lists an <code>inbound_external_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inbound_external_links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rtbfabric.inbound_external_links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_inbound_external_link"
    values={[
        { label: 'get_inbound_external_link', value: 'get_inbound_external_link' }
    ]}
>
<TabItem value="get_inbound_external_link">

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
    <td>The timestamp of when the inbound external link was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>The domain name. (pattern: &lt;code&gt;(?:&#91;a-z0-9&#93;(?:&#91;a-z0-9-&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?)(?:\.(?:&#91;a-z0-9&#93;(?:&#91;a-z0-9-&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?))+&lt;/code&gt;)</td>
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
    <td><CopyableCode code="pendingFlowModules" /></td>
    <td><code>array</code></td>
    <td>The configuration of pending flow modules.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the request. (PENDING_CREATION, PENDING_REQUEST, REQUESTED, ACCEPTED, ACTIVE, REJECTED, FAILED, PENDING_DELETION, DELETED, PENDING_UPDATE, PENDING_ISOLATION, ISOLATED, PENDING_RESTORATION)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of the key-value pairs for the tag or tags assigned to the specified resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the inbound external link was updated.</td>
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
    <td><a href="#get_inbound_external_link"><CopyableCode code="get_inbound_external_link" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an inbound external link.</td>
</tr>
<tr>
    <td><a href="#create_inbound_external_link"><CopyableCode code="create_inbound_external_link" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-logSettings"><code>logSettings</code></a></td>
    <td></td>
    <td>Creates an inbound external link.</td>
</tr>
<tr>
    <td><a href="#delete_inbound_external_link"><CopyableCode code="delete_inbound_external_link" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an inbound external link.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_inbound_external_link"
    values={[
        { label: 'get_inbound_external_link', value: 'get_inbound_external_link' }
    ]}
>
<TabItem value="get_inbound_external_link">

Retrieves information about an inbound external link.

```sql
SELECT
attributes,
connectivityType,
createdAt,
domainName,
flowModules,
gatewayId,
linkId,
logSettings,
pendingFlowModules,
status,
tags,
updatedAt
FROM aws.rtbfabric.inbound_external_links
WHERE gateway_id = '{{ gateway_id }}' -- required
AND link_id = '{{ link_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_inbound_external_link"
    values={[
        { label: 'create_inbound_external_link', value: 'create_inbound_external_link' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_inbound_external_link">

Creates an inbound external link.

```sql
INSERT INTO aws.rtbfabric.inbound_external_links (
clientToken,
attributes,
logSettings,
tags,
gateway_id,
region
)
SELECT 
'{{ clientToken }}' /* required */,
'{{ attributes }}',
'{{ logSettings }}' /* required */,
'{{ tags }}',
'{{ gateway_id }}',
'{{ region }}'
RETURNING
domainName,
gatewayId,
linkId,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: inbound_external_links
  props:
    - name: gateway_id
      value: "{{ gateway_id }}"
      description: Required parameter for the inbound_external_links resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the inbound_external_links resource.
    - name: clientToken
      value: "{{ clientToken }}"
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
    - name: logSettings
      description: |
        Describes the settings for a link log.
      value:
        applicationLogs:
          sampling:
            errorLog: {{ errorLog }}
            filterLog: {{ filterLog }}
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_inbound_external_link"
    values={[
        { label: 'delete_inbound_external_link', value: 'delete_inbound_external_link' }
    ]}
>
<TabItem value="delete_inbound_external_link">

Deletes an inbound external link.

```sql
DELETE FROM aws.rtbfabric.inbound_external_links
WHERE gateway_id = '{{ gateway_id }}' --required
AND link_id = '{{ link_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
