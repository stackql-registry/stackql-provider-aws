--- 
title: channel_handshakes
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_handshakes
  - partnercentral_channel
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

Creates, updates, deletes, gets or lists a <code>channel_handshakes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channel_handshakes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_channel.channel_handshakes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_channel_handshakes"
    values={[
        { label: 'list_channel_handshakes', value: 'list_channel_handshakes' }
    ]}
>
<TabItem value="list_channel_handshakes">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the handshake. (pattern: &lt;code&gt;ch-&#91;a-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the handshake.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedResourceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource associated with the handshake. (pattern: &lt;code&gt;(pma|rs)-&#91;a-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier associated with the handshake. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the handshake was created.</td>
</tr>
<tr>
    <td><CopyableCode code="detail" /></td>
    <td><code>object</code></td>
    <td>Detailed information about the handshake.</td>
</tr>
<tr>
    <td><CopyableCode code="handshakeType" /></td>
    <td><code>string</code></td>
    <td>The type of the handshake. (START_SERVICE_PERIOD, REVOKE_SERVICE_PERIOD, PROGRAM_MANAGEMENT_ACCOUNT)</td>
</tr>
<tr>
    <td><CopyableCode code="ownerAccountId" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the handshake owner. (pattern: &lt;code&gt;&#91;0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="receiverAccountId" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the handshake receiver. (pattern: &lt;code&gt;&#91;0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="senderAccountId" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the handshake sender. (pattern: &lt;code&gt;&#91;0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="senderDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the handshake sender. (pattern: &lt;code&gt;&#91;\x00-\x7E\xA9\xAE\xA2-\xA5\u202F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the handshake. (PENDING, ACCEPTED, REJECTED, CANCELED, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the handshake was last updated.</td>
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
    <td><a href="#list_channel_handshakes"><CopyableCode code="list_channel_handshakes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists channel handshakes based on specified criteria.</td>
</tr>
<tr>
    <td><a href="#create_channel_handshake"><CopyableCode code="create_channel_handshake" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-handshakeType"><code>handshakeType</code></a>, <a href="#parameter-catalog"><code>catalog</code></a>, <a href="#parameter-associatedResourceIdentifier"><code>associatedResourceIdentifier</code></a></td>
    <td></td>
    <td>Creates a new channel handshake request to establish a partnership with another AWS account.</td>
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
    defaultValue="list_channel_handshakes"
    values={[
        { label: 'list_channel_handshakes', value: 'list_channel_handshakes' }
    ]}
>
<TabItem value="list_channel_handshakes">

Lists channel handshakes based on specified criteria.

```sql
SELECT
id,
arn,
associatedResourceId,
catalog,
createdAt,
detail,
handshakeType,
ownerAccountId,
receiverAccountId,
senderAccountId,
senderDisplayName,
status,
updatedAt
FROM aws.partnercentral_channel.channel_handshakes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_channel_handshake"
    values={[
        { label: 'create_channel_handshake', value: 'create_channel_handshake' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_channel_handshake">

Creates a new channel handshake request to establish a partnership with another AWS account.

```sql
INSERT INTO aws.partnercentral_channel.channel_handshakes (
handshakeType,
catalog,
associatedResourceIdentifier,
payload,
clientToken,
tags,
region
)
SELECT 
'{{ handshakeType }}' /* required */,
'{{ catalog }}' /* required */,
'{{ associatedResourceIdentifier }}' /* required */,
'{{ payload }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
channelHandshakeDetail
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: channel_handshakes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the channel_handshakes resource.
    - name: handshakeType
      value: "{{ handshakeType }}"
      description: |
        The type of handshake to create (e.g., start service period, revoke service period).
      valid_values: ['START_SERVICE_PERIOD', 'REVOKE_SERVICE_PERIOD', 'PROGRAM_MANAGEMENT_ACCOUNT']
    - name: catalog
      value: "{{ catalog }}"
      description: |
        The catalog identifier for the handshake request.
    - name: associatedResourceIdentifier
      value: "{{ associatedResourceIdentifier }}"
      description: |
        The identifier of the resource associated with this handshake.
    - name: payload
      description: |
        The payload containing specific details for the handshake type.
      value:
        startServicePeriodPayload:
          programManagementAccountIdentifier: "{{ programManagementAccountIdentifier }}"
          note: "{{ note }}"
          servicePeriodType: "{{ servicePeriodType }}"
          minimumNoticeDays: "{{ minimumNoticeDays }}"
          endDate: "{{ endDate }}"
        revokeServicePeriodPayload:
          programManagementAccountIdentifier: "{{ programManagementAccountIdentifier }}"
          note: "{{ note }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier to ensure idempotency of the request.
    - name: tags
      description: |
        Key-value pairs to associate with the channel handshake.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>
