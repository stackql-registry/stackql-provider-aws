--- 
title: tickets_v2
hide_title: false
hide_table_of_contents: false
keywords:
  - tickets_v2
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>tickets_v2</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tickets_v2" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.tickets_v2" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_ticket_v2"><CopyableCode code="create_ticket_v2" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectorId"><code>ConnectorId</code></a>, <a href="#parameter-FindingMetadataUid"><code>FindingMetadataUid</code></a></td>
    <td></td>
    <td>Grants permission to create a ticket in the chosen ITSM based on finding information for the provided finding metadata UID.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_ticket_v2"
    values={[
        { label: 'create_ticket_v2', value: 'create_ticket_v2' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ticket_v2">

Grants permission to create a ticket in the chosen ITSM based on finding information for the provided finding metadata UID.

```sql
INSERT INTO aws.securityhub.tickets_v2 (
ConnectorId,
FindingMetadataUid,
ClientToken,
Mode,
region
)
SELECT 
'{{ ConnectorId }}' /* required */,
'{{ FindingMetadataUid }}' /* required */,
'{{ ClientToken }}',
'{{ Mode }}',
'{{ region }}'
RETURNING
ticket_id,
ticket_src_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tickets_v2
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tickets_v2 resource.
    - name: ConnectorId
      value: "{{ ConnectorId }}"
    - name: FindingMetadataUid
      value: "{{ FindingMetadataUid }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Mode
      value: "{{ Mode }}"
      description: |
        The mode for creating a ticket.
      valid_values: ['DRYRUN']
`}</CodeBlock>

</TabItem>
</Tabs>
