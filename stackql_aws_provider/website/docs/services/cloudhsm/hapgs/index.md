--- 
title: hapgs
hide_title: false
hide_table_of_contents: false
keywords:
  - hapgs
  - cloudhsm
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

Creates, updates, deletes, gets or lists a <code>hapgs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hapgs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudhsm.hapgs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_hapg"
    values={[
        { label: 'describe_hapg', value: 'describe_hapg' },
        { label: 'list_hapgs', value: 'list_hapgs' }
    ]}
>
<TabItem value="describe_hapg">

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
    <td><CopyableCode code="HapgArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the high-availability partition group. (pattern: &lt;code&gt;arn:aws(-iso)?:cloudhsm:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:hapg-&#91;0-9a-f&#93;&#123;8&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HapgSerial" /></td>
    <td><code>string</code></td>
    <td>The serial number of the high-availability partition group. (pattern: &lt;code&gt;&#91;\w :+=./\\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HsmsLastActionFailed" /></td>
    <td><code>array</code></td>
    <td>Contains a list of ARNs that identify the HSMs.</td>
</tr>
<tr>
    <td><CopyableCode code="HsmsPendingDeletion" /></td>
    <td><code>array</code></td>
    <td>Contains a list of ARNs that identify the HSMs.</td>
</tr>
<tr>
    <td><CopyableCode code="HsmsPendingRegistration" /></td>
    <td><code>array</code></td>
    <td>Contains a list of ARNs that identify the HSMs.</td>
</tr>
<tr>
    <td><CopyableCode code="Label" /></td>
    <td><code>string</code></td>
    <td>The label for the high-availability partition group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTimestamp" /></td>
    <td><code>string</code></td>
    <td>The date and time the high-availability partition group was last modified. (pattern: &lt;code&gt;\d*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PartitionSerialList" /></td>
    <td><code>array</code></td>
    <td>The list of partition serial numbers that belong to the high-availability partition group.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the high-availability partition group. (READY, UPDATING, DEGRADED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_hapgs">

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
    <td><CopyableCode code="hapg" /></td>
    <td><code>string</code></td>
    <td>The list of high-availability partition groups.</td>
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
    <td><a href="#describe_hapg"><CopyableCode code="describe_hapg" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Retrieves information about a high-availability partition group.</td>
</tr>
<tr>
    <td><a href="#list_hapgs"><CopyableCode code="list_hapgs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Lists the high-availability partition groups for the account. This operation supports pagination with the use of the NextToken member. If more results are available, the NextToken member of the response contains a token that you pass in the next call to ListHapgs to retrieve the next set of items.</td>
</tr>
<tr>
    <td><a href="#create_hapg"><CopyableCode code="create_hapg" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Creates a high-availability partition group. A high-availability partition group is a group of partitions that spans multiple physical HSMs.</td>
</tr>
<tr>
    <td><a href="#modify_hapg"><CopyableCode code="modify_hapg" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HapgArn"><code>HapgArn</code></a></td>
    <td></td>
    <td>This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Modifies an existing high-availability partition group.</td>
</tr>
<tr>
    <td><a href="#delete_hapg"><CopyableCode code="delete_hapg" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Deletes a high-availability partition group.</td>
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
    defaultValue="describe_hapg"
    values={[
        { label: 'describe_hapg', value: 'describe_hapg' },
        { label: 'list_hapgs', value: 'list_hapgs' }
    ]}
>
<TabItem value="describe_hapg">

This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Retrieves information about a high-availability partition group.

```sql
SELECT
HapgArn,
HapgSerial,
HsmsLastActionFailed,
HsmsPendingDeletion,
HsmsPendingRegistration,
Label,
LastModifiedTimestamp,
PartitionSerialList,
State
FROM aws.cloudhsm.hapgs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_hapgs">

This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Lists the high-availability partition groups for the account. This operation supports pagination with the use of the NextToken member. If more results are available, the NextToken member of the response contains a token that you pass in the next call to ListHapgs to retrieve the next set of items.

```sql
SELECT
hapg
FROM aws.cloudhsm.hapgs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_hapg"
    values={[
        { label: 'create_hapg', value: 'create_hapg' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_hapg">

This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Creates a high-availability partition group. A high-availability partition group is a group of partitions that spans multiple physical HSMs.

```sql
INSERT INTO aws.cloudhsm.hapgs (
Label,
region
)
SELECT 
'{{ Label }}',
'{{ region }}'
RETURNING
HapgArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hapgs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the hapgs resource.
    - name: Label
      value: "{{ Label }}"
      description: |
        The label of the new high-availability partition group.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_hapg"
    values={[
        { label: 'modify_hapg', value: 'modify_hapg' }
    ]}
>
<TabItem value="modify_hapg">

This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Modifies an existing high-availability partition group.

```sql
UPDATE aws.cloudhsm.hapgs
SET 
HapgArn = '{{ HapgArn }}',
Label = '{{ Label }}',
PartitionSerialList = '{{ PartitionSerialList }}'
WHERE 
region = '{{ region }}' --required
AND HapgArn = '{{ HapgArn }}' --required
RETURNING
HapgArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_hapg"
    values={[
        { label: 'delete_hapg', value: 'delete_hapg' }
    ]}
>
<TabItem value="delete_hapg">

This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Deletes a high-availability partition group.

```sql
DELETE FROM aws.cloudhsm.hapgs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
