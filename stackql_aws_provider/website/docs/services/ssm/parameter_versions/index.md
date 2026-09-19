--- 
title: parameter_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - parameter_versions
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

Creates, updates, deletes, gets or lists a <code>parameter_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="parameter_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.parameter_versions" /></td></tr>
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
    <td><a href="#label_parameter_version"><CopyableCode code="label_parameter_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Labels"><code>Labels</code></a></td>
    <td></td>
    <td>A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Amazon Web Services Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions. Parameter labels have the following requirements and restrictions. A version of a parameter can have a maximum of 10 labels. You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2. You can move a label from one version of a parameter to another. You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter. If you no longer want to use a parameter label, then you can either delete it or move it to a different version of a parameter. A label can have a maximum of 100 characters. Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_). Labels can't begin with a number, "aws" or "ssm" (not case sensitive). If a label fails to meet these requirements, then the label isn't associated with a parameter and the system displays it in the list of InvalidLabels. Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a ValidationException error.</td>
</tr>
<tr>
    <td><a href="#unlabel_parameter_version"><CopyableCode code="unlabel_parameter_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-ParameterVersion"><code>ParameterVersion</code></a>, <a href="#parameter-Labels"><code>Labels</code></a></td>
    <td></td>
    <td>Remove a label or labels from a parameter. Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a ValidationException error.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="label_parameter_version"
    values={[
        { label: 'label_parameter_version', value: 'label_parameter_version' },
        { label: 'unlabel_parameter_version', value: 'unlabel_parameter_version' }
    ]}
>
<TabItem value="label_parameter_version">

A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Amazon Web Services Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions. Parameter labels have the following requirements and restrictions. A version of a parameter can have a maximum of 10 labels. You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2. You can move a label from one version of a parameter to another. You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter. If you no longer want to use a parameter label, then you can either delete it or move it to a different version of a parameter. A label can have a maximum of 100 characters. Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_). Labels can't begin with a number, "aws" or "ssm" (not case sensitive). If a label fails to meet these requirements, then the label isn't associated with a parameter and the system displays it in the list of InvalidLabels. Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a ValidationException error.

```sql
EXEC aws.ssm.parameter_versions.label_parameter_version 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"ParameterVersion": {{ ParameterVersion }}, 
"Labels": "{{ Labels }}"
}'
;
```
</TabItem>
<TabItem value="unlabel_parameter_version">

Remove a label or labels from a parameter. Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a ValidationException error.

```sql
EXEC aws.ssm.parameter_versions.unlabel_parameter_version 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"ParameterVersion": {{ ParameterVersion }}, 
"Labels": "{{ Labels }}"
}'
;
```
</TabItem>
</Tabs>
