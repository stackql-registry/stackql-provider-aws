--- 
title: parameter_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - parameter_histories
  - ssm
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

Creates, updates, deletes, gets or lists a <code>parameter_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="parameter_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.parameter_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_parameter_history"
    values={[
        { label: 'get_parameter_history', value: 'get_parameter_history' }
    ]}
>
<TabItem value="get_parameter_history">

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
    <td><CopyableCode code="AllowedPattern" /></td>
    <td><code>string</code></td>
    <td>Parameter names can include the following letters and symbols. a-zA-Z0-9_.-</td>
</tr>
<tr>
    <td><CopyableCode code="DataType" /></td>
    <td><code>string</code></td>
    <td>The data type of the parameter, such as text or aws:ec2:image. The default is text.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Information about the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="KeyId" /></td>
    <td><code>string</code></td>
    <td>The alias of the Key Management Service (KMS) key used to encrypt the parameter. Applies to SecureString parameters only (pattern: &lt;code&gt;^(&#91;a-zA-Z0-9:/_-&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Labels" /></td>
    <td><code>array</code></td>
    <td>Labels assigned to the parameter version.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date the parameter was last changed or updated.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedUser" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the Amazon Web Services user who last changed the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="Policies" /></td>
    <td><code>array</code></td>
    <td>Information about the policies assigned to a parameter. Assigning parameter policies in the Amazon Web Services Systems Manager User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Tier" /></td>
    <td><code>string</code></td>
    <td>The parameter tier. (Standard, Advanced, Intelligent-Tiering)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of parameter used. (String, StringList, SecureString)</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>The parameter value.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The parameter version.</td>
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
    <td><a href="#get_parameter_history"><CopyableCode code="get_parameter_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the history of all changes to a parameter. Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a ValidationException error. If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, GetParameterHistory retrieves whatever the original key alias was referencing.</td>
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
    defaultValue="get_parameter_history"
    values={[
        { label: 'get_parameter_history', value: 'get_parameter_history' }
    ]}
>
<TabItem value="get_parameter_history">

Retrieves the history of all changes to a parameter. Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a ValidationException error. If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, GetParameterHistory retrieves whatever the original key alias was referencing.

```sql
SELECT
AllowedPattern,
DataType,
Description,
KeyId,
Labels,
LastModifiedDate,
LastModifiedUser,
Name,
Policies,
Tier,
Type,
Value,
Version
FROM aws.ssm.parameter_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
