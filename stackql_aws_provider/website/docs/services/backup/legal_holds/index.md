--- 
title: legal_holds
hide_title: false
hide_table_of_contents: false
keywords:
  - legal_holds
  - backup
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

Creates, updates, deletes, gets or lists a <code>legal_holds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="legal_holds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.legal_holds" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_legal_hold"
    values={[
        { label: 'get_legal_hold', value: 'get_legal_hold' },
        { label: 'list_legal_holds', value: 'list_legal_holds' }
    ]}
>
<TabItem value="get_legal_hold">

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
    <td><CopyableCode code="CancelDescription" /></td>
    <td><code>string</code></td>
    <td>The reason for removing the legal hold.</td>
</tr>
<tr>
    <td><CopyableCode code="CancellationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the legal hold was cancelled.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the legal hold was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the legal hold.</td>
</tr>
<tr>
    <td><CopyableCode code="LegalHoldArn" /></td>
    <td><code>string</code></td>
    <td>The framework ARN for the specified legal hold. The format of the ARN depends on the resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="LegalHoldId" /></td>
    <td><code>string</code></td>
    <td>The ID of the legal hold.</td>
</tr>
<tr>
    <td><CopyableCode code="RecoveryPointSelection" /></td>
    <td><code>object</code></td>
    <td>This specifies criteria to assign a set of resources, such as resource types or backup vaults.</td>
</tr>
<tr>
    <td><CopyableCode code="RetainRecordUntil" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time until which the legal hold record is retained.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the legal hold. (CREATING, ACTIVE, CANCELING, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="Title" /></td>
    <td><code>string</code></td>
    <td>The title of the legal hold.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_legal_holds">

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
    <td><CopyableCode code="CancellationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the legal hold was cancelled.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the legal hold was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of a legal hold.</td>
</tr>
<tr>
    <td><CopyableCode code="LegalHoldArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the legal hold; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
</tr>
<tr>
    <td><CopyableCode code="LegalHoldId" /></td>
    <td><code>string</code></td>
    <td>The ID of the legal hold.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the legal hold. (CREATING, ACTIVE, CANCELING, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="Title" /></td>
    <td><code>string</code></td>
    <td>The title of a legal hold.</td>
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
    <td><a href="#get_legal_hold"><CopyableCode code="get_legal_hold" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-legal_hold_id"><code>legal_hold_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action returns details for a specified legal hold. The details are the body of a legal hold in JSON format, in addition to metadata.</td>
</tr>
<tr>
    <td><a href="#list_legal_holds"><CopyableCode code="list_legal_holds" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>This action returns metadata about active and previous legal holds.</td>
</tr>
<tr>
    <td><a href="#create_legal_hold"><CopyableCode code="create_legal_hold" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a legal hold on a recovery point (backup). A legal hold is a restraint on altering or deleting a backup until an authorized user cancels the legal hold. Any actions to delete or disassociate a recovery point will fail with an error if one or more active legal holds are on the recovery point.</td>
</tr>
<tr>
    <td><a href="#cancel_legal_hold"><CopyableCode code="cancel_legal_hold" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-legal_hold_id"><code>legal_hold_id</code></a>, <a href="#parameter-cancelDescription"><code>cancelDescription</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-retainRecordInDays"><code>retainRecordInDays</code></a></td>
    <td>Removes the specified legal hold on a recovery point. This action can only be performed by a user with sufficient permissions.</td>
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
<tr id="parameter-cancelDescription">
    <td><CopyableCode code="cancelDescription" /></td>
    <td><code>string</code></td>
    <td>A string the describes the reason for removing the legal hold.</td>
</tr>
<tr id="parameter-legal_hold_id">
    <td><CopyableCode code="legal_hold_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the legal hold.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of resource list items to be returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned resources. For example, if a request is made to return MaxResults number of resources, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
<tr id="parameter-retainRecordInDays">
    <td><CopyableCode code="retainRecordInDays" /></td>
    <td><code>integer (int64)</code></td>
    <td>The integer amount, in days, after which to remove legal hold.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_legal_hold"
    values={[
        { label: 'get_legal_hold', value: 'get_legal_hold' },
        { label: 'list_legal_holds', value: 'list_legal_holds' }
    ]}
>
<TabItem value="get_legal_hold">

This action returns details for a specified legal hold. The details are the body of a legal hold in JSON format, in addition to metadata.

```sql
SELECT
CancelDescription,
CancellationDate,
CreationDate,
Description,
LegalHoldArn,
LegalHoldId,
RecoveryPointSelection,
RetainRecordUntil,
Status,
Title
FROM aws.backup.legal_holds
WHERE legal_hold_id = '{{ legal_hold_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_legal_holds">

This action returns metadata about active and previous legal holds.

```sql
SELECT
CancellationDate,
CreationDate,
Description,
LegalHoldArn,
LegalHoldId,
Status,
Title
FROM aws.backup.legal_holds
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_legal_hold"
    values={[
        { label: 'create_legal_hold', value: 'create_legal_hold' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_legal_hold">

Creates a legal hold on a recovery point (backup). A legal hold is a restraint on altering or deleting a backup until an authorized user cancels the legal hold. Any actions to delete or disassociate a recovery point will fail with an error if one or more active legal holds are on the recovery point.

```sql
INSERT INTO aws.backup.legal_holds (
Title,
Description,
IdempotencyToken,
RecoveryPointSelection,
Tags,
region
)
SELECT 
'{{ Title }}',
'{{ Description }}',
'{{ IdempotencyToken }}',
'{{ RecoveryPointSelection }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
CreationDate,
Description,
LegalHoldArn,
LegalHoldId,
RecoveryPointSelection,
Status,
Title
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: legal_holds
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the legal_holds resource.
    - name: Title
      value: "{{ Title }}"
    - name: Description
      value: "{{ Description }}"
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
    - name: RecoveryPointSelection
      description: |
        This specifies criteria to assign a set of resources, such as resource types or backup vaults.
      value:
        VaultNames:
          - "{{ VaultNames }}"
        ResourceIdentifiers:
          - "{{ ResourceIdentifiers }}"
        DateRange:
          FromDate: "{{ FromDate }}"
          ToDate: "{{ ToDate }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_legal_hold"
    values={[
        { label: 'cancel_legal_hold', value: 'cancel_legal_hold' }
    ]}
>
<TabItem value="cancel_legal_hold">

Removes the specified legal hold on a recovery point. This action can only be performed by a user with sufficient permissions.

```sql
EXEC aws.backup.legal_holds.cancel_legal_hold 
@legal_hold_id='{{ legal_hold_id }}' --required, 
@cancelDescription='{{ cancelDescription }}' --required, 
@region='{{ region }}' --required, 
@retainRecordInDays='{{ retainRecordInDays }}'
;
```
</TabItem>
</Tabs>
