--- 
title: templates
hide_title: false
hide_table_of_contents: false
keywords:
  - templates
  - cloudformation
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

Creates, updates, deletes, gets or lists a <code>templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_template"
    values={[
        { label: 'get_template', value: 'get_template' }
    ]}
>
<TabItem value="get_template">

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
    <td><CopyableCode code="line_items" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#get_template"><CopyableCode code="get_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-ChangeSetName"><code>ChangeSetName</code></a>, <a href="#parameter-TemplateStage"><code>TemplateStage</code></a></td>
    <td>Returns the template body for a specified stack. You can get the template for running or deleted stacks. For deleted stacks, GetTemplate returns the template for up to 90 days after the stack has been deleted. If the template doesn't exist, a ValidationError is returned.</td>
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
<tr id="parameter-ChangeSetName">
    <td><CopyableCode code="ChangeSetName" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of a change set for which CloudFormation returns the associated template. If you specify a name, you must also specify the StackName.</td>
</tr>
<tr id="parameter-StackName">
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>The name or the unique stack ID that's associated with the stack, which aren't always interchangeable: Running stacks: You can specify either the stack's name or its unique stack ID. Deleted stacks: You must specify the unique stack ID.</td>
</tr>
<tr id="parameter-TemplateStage">
    <td><CopyableCode code="TemplateStage" /></td>
    <td><code>string</code></td>
    <td>For templates that include transforms, the stage of the template that CloudFormation returns. To get the user-submitted template, specify Original. To get the template after CloudFormation has processed all transforms, specify Processed. If the template doesn't include transforms, Original and Processed return the same template. By default, CloudFormation specifies Processed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_template"
    values={[
        { label: 'get_template', value: 'get_template' }
    ]}
>
<TabItem value="get_template">

Returns the template body for a specified stack. You can get the template for running or deleted stacks. For deleted stacks, GetTemplate returns the template for up to 90 days after the stack has been deleted. If the template doesn't exist, a ValidationError is returned.

```sql
SELECT
line_items
FROM aws.cloudformation.templates
WHERE region = '{{ region }}' -- required
AND StackName = '{{ StackName }}'
AND ChangeSetName = '{{ ChangeSetName }}'
AND TemplateStage = '{{ TemplateStage }}'
;
```
</TabItem>
</Tabs>
