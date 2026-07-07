--- 
title: template_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - template_summaries
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

Creates, updates, deletes, gets or lists a <code>template_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="template_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.template_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_template_summary"
    values={[
        { label: 'get_template_summary', value: 'get_template_summary' }
    ]}
>
<TabItem value="get_template_summary">

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
    <td><a href="#get_template_summary"><CopyableCode code="get_template_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TemplateBody"><code>TemplateBody</code></a>, <a href="#parameter-TemplateURL"><code>TemplateURL</code></a>, <a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-StackSetName"><code>StackSetName</code></a>, <a href="#parameter-CallAs"><code>CallAs</code></a>, <a href="#parameter-TemplateSummaryConfig"><code>TemplateSummaryConfig</code></a></td>
    <td>Returns information about a new or existing template. The GetTemplateSummary action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or StackSet. You can use the GetTemplateSummary action when you submit a template, or you can get template information for a StackSet, or a running or deleted stack. For deleted stacks, GetTemplateSummary returns the template information for up to 90 days after the stack has been deleted. If the template doesn't exist, a ValidationError is returned.</td>
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
<tr id="parameter-CallAs">
    <td><CopyableCode code="CallAs" /></td>
    <td><code>string</code></td>
    <td>&#91;Service-managed permissions&#93; Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for StackSets with self-managed permissions. If you are signed in to the management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide.</td>
</tr>
<tr id="parameter-StackName">
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>The name or the stack ID that's associated with the stack, which aren't always interchangeable. For running stacks, you can specify either the stack's name or its unique stack ID. For deleted stack, you must specify the unique stack ID. Conditional: You must specify only one of the following parameters: StackName, StackSetName, TemplateBody, or TemplateURL.</td>
</tr>
<tr id="parameter-StackSetName">
    <td><CopyableCode code="StackSetName" /></td>
    <td><code>string</code></td>
    <td>The name or unique ID of the StackSet from which the stack was created. Conditional: You must specify only one of the following parameters: StackName, StackSetName, TemplateBody, or TemplateURL.</td>
</tr>
<tr id="parameter-TemplateBody">
    <td><CopyableCode code="TemplateBody" /></td>
    <td><code>string</code></td>
    <td>Structure that contains the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. Conditional: You must specify only one of the following parameters: StackName, StackSetName, TemplateBody, or TemplateURL.</td>
</tr>
<tr id="parameter-TemplateSummaryConfig">
    <td><CopyableCode code="TemplateSummaryConfig" /></td>
    <td><code>object</code></td>
    <td>Specifies options for the GetTemplateSummary API action.</td>
</tr>
<tr id="parameter-TemplateURL">
    <td><CopyableCode code="TemplateURL" /></td>
    <td><code>string</code></td>
    <td>The URL of a file that contains the template body. The URL must point to a template (max size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with https:​//. Conditional: You must specify only one of the following parameters: StackName, StackSetName, TemplateBody, or TemplateURL.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_template_summary"
    values={[
        { label: 'get_template_summary', value: 'get_template_summary' }
    ]}
>
<TabItem value="get_template_summary">

Returns information about a new or existing template. The GetTemplateSummary action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or StackSet. You can use the GetTemplateSummary action when you submit a template, or you can get template information for a StackSet, or a running or deleted stack. For deleted stacks, GetTemplateSummary returns the template information for up to 90 days after the stack has been deleted. If the template doesn't exist, a ValidationError is returned.

```sql
SELECT
line_items
FROM aws.cloudformation.template_summaries
WHERE region = '{{ region }}' -- required
AND TemplateBody = '{{ TemplateBody }}'
AND TemplateURL = '{{ TemplateURL }}'
AND StackName = '{{ StackName }}'
AND StackSetName = '{{ StackSetName }}'
AND CallAs = '{{ CallAs }}'
AND TemplateSummaryConfig = '{{ TemplateSummaryConfig }}'
;
```
</TabItem>
</Tabs>
