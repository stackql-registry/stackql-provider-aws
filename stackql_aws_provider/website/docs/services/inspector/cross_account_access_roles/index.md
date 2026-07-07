--- 
title: cross_account_access_roles
hide_title: false
hide_table_of_contents: false
keywords:
  - cross_account_access_roles
  - inspector
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

Creates, updates, deletes, gets or lists a <code>cross_account_access_roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cross_account_access_roles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector.cross_account_access_roles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cross_account_access_role"
    values={[
        { label: 'describe_cross_account_access_role', value: 'describe_cross_account_access_role' }
    ]}
>
<TabItem value="describe_cross_account_access_role">

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
    <td><CopyableCode code="registeredAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the cross-account access role was registered.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN that specifies the IAM role that Amazon Inspector uses to access your AWS account.</td>
</tr>
<tr>
    <td><CopyableCode code="valid" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that specifies whether the IAM role has the necessary policies attached to enable Amazon Inspector to access your AWS account.</td>
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
    <td><a href="#describe_cross_account_access_role"><CopyableCode code="describe_cross_account_access_role" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the IAM role that enables Amazon Inspector to access your AWS account.</td>
</tr>
<tr>
    <td><a href="#register_cross_account_access_role"><CopyableCode code="register_cross_account_access_role" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Registers the IAM role that grants Amazon Inspector access to AWS Services needed to perform security assessments.</td>
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
    defaultValue="describe_cross_account_access_role"
    values={[
        { label: 'describe_cross_account_access_role', value: 'describe_cross_account_access_role' }
    ]}
>
<TabItem value="describe_cross_account_access_role">

Describes the IAM role that enables Amazon Inspector to access your AWS account.

```sql
SELECT
registeredAt,
roleArn,
valid
FROM aws.inspector.cross_account_access_roles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_cross_account_access_role"
    values={[
        { label: 'register_cross_account_access_role', value: 'register_cross_account_access_role' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_cross_account_access_role">

Registers the IAM role that grants Amazon Inspector access to AWS Services needed to perform security assessments.

```sql
INSERT INTO aws.inspector.cross_account_access_roles (
roleArn,
region
)
SELECT 
'{{ roleArn }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cross_account_access_roles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cross_account_access_roles resource.
    - name: roleArn
      value: "{{ roleArn }}"
      description: |
        The ARN of the IAM role that grants Amazon Inspector access to AWS Services needed to perform security assessments.
`}</CodeBlock>

</TabItem>
</Tabs>
