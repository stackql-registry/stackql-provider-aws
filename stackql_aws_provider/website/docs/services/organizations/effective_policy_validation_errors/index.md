--- 
title: effective_policy_validation_errors
hide_title: false
hide_table_of_contents: false
keywords:
  - effective_policy_validation_errors
  - organizations
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

Creates, updates, deletes, gets or lists an <code>effective_policy_validation_errors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="effective_policy_validation_errors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.effective_policy_validation_errors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_effective_policy_validation_errors"
    values={[
        { label: 'list_effective_policy_validation_errors', value: 'list_effective_policy_validation_errors' }
    ]}
>
<TabItem value="list_effective_policy_validation_errors">

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
    <td><CopyableCode code="contributing_policies" /></td>
    <td><code>array</code></td>
    <td>The individual policies inherited and attached to the account which contributed to the validation error.</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>The error code for the validation error. For example, ELEMENTS_TOO_MANY.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The error message for the validation error.</td>
</tr>
<tr>
    <td><CopyableCode code="path_to_error" /></td>
    <td><code>string</code></td>
    <td>The path within the effective policy where the validation error occurred.</td>
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
    <td><a href="#list_effective_policy_validation_errors"><CopyableCode code="list_effective_policy_validation_errors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the validation errors on an effective policy for a specified account and policy type. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
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
    defaultValue="list_effective_policy_validation_errors"
    values={[
        { label: 'list_effective_policy_validation_errors', value: 'list_effective_policy_validation_errors' }
    ]}
>
<TabItem value="list_effective_policy_validation_errors">

Lists all the validation errors on an effective policy for a specified account and policy type. You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
SELECT
contributing_policies,
error_code,
error_message,
path_to_error
FROM aws.organizations.effective_policy_validation_errors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
