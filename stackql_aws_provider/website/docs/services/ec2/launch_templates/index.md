--- 
title: launch_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - launch_templates
  - ec2
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

Creates, updates, deletes, gets or lists a <code>launch_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="launch_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.launch_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_launch_templates"
    values={[
        { label: 'describe_launch_templates', value: 'describe_launch_templates' }
    ]}
>
<TabItem value="describe_launch_templates">

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
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string</code></td>
    <td>The time launch template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>string</code></td>
    <td>The principal that created the launch template.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultVersionNumber" /></td>
    <td><code>integer</code></td>
    <td>The version number of the default version of the launch template.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestVersionNumber" /></td>
    <td><code>integer</code></td>
    <td>The version number of the latest version of the launch template.</td>
</tr>
<tr>
    <td><CopyableCode code="LaunchTemplateId" /></td>
    <td><code>string</code></td>
    <td>The ID of the launch template.</td>
</tr>
<tr>
    <td><CopyableCode code="LaunchTemplateName" /></td>
    <td><code>string</code></td>
    <td>The name of the launch template.</td>
</tr>
<tr>
    <td><CopyableCode code="Operator" /></td>
    <td><code>string</code></td>
    <td>The entity that manages the launch template.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the launch template.</td>
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
    <td><a href="#describe_launch_templates"><CopyableCode code="describe_launch_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-LaunchTemplateId"><code>LaunchTemplateId</code></a>, <a href="#parameter-LaunchTemplateName"><code>LaunchTemplateName</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-IncludeManagedResources"><code>IncludeManagedResources</code></a></td>
    <td>Describes one or more launch templates.</td>
</tr>
<tr>
    <td><a href="#create_launch_template"><CopyableCode code="create_launch_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LaunchTemplateName"><code>LaunchTemplateName</code></a>, <a href="#parameter-LaunchTemplateData"><code>LaunchTemplateData</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-VersionDescription"><code>VersionDescription</code></a>, <a href="#parameter-Operator"><code>Operator</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Creates a launch template. A launch template contains the parameters to launch an instance. When you launch an instance using RunInstances, you can specify a launch template instead of providing the launch parameters in the request. For more information, see Store instance launch parameters in Amazon EC2 launch templates in the Amazon EC2 User Guide. To clone an existing launch template as the basis for a new launch template, use the Amazon EC2 console. The API, SDKs, and CLI do not support cloning a template. For more information, see Create a launch template from an existing launch template in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_launch_template"><CopyableCode code="modify_launch_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-LaunchTemplateId"><code>LaunchTemplateId</code></a>, <a href="#parameter-LaunchTemplateName"><code>LaunchTemplateName</code></a>, <a href="#parameter-SetDefaultVersion"><code>SetDefaultVersion</code></a></td>
    <td>Modifies a launch template. You can specify which version of the launch template to set as the default version. When launching an instance, the default version applies when a launch template version is not specified.</td>
</tr>
<tr>
    <td><a href="#delete_launch_template"><CopyableCode code="delete_launch_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-LaunchTemplateId"><code>LaunchTemplateId</code></a>, <a href="#parameter-LaunchTemplateName"><code>LaunchTemplateName</code></a></td>
    <td>Deletes a launch template. Deleting a launch template deletes all of its versions.</td>
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
<tr id="parameter-LaunchTemplateData">
    <td><CopyableCode code="LaunchTemplateData" /></td>
    <td><code>object</code></td>
    <td>The information for the launch template.</td>
</tr>
<tr id="parameter-LaunchTemplateName">
    <td><CopyableCode code="LaunchTemplateName" /></td>
    <td><code>string</code></td>
    <td>A name for the launch template.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If a client token isn't specified, a randomly generated token is used in the request to ensure idempotency. For more information, see Ensuring idempotency. Constraint: Maximum 128 ASCII characters.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. create-time - The time the launch template was created. launch-template-name - The name of the launch template. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</td>
</tr>
<tr id="parameter-IncludeManagedResources">
    <td><CopyableCode code="IncludeManagedResources" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to include managed resources in the output. If this parameter is set to true, the output includes resources that are managed by Amazon Web Services services, even if managed resource visibility is set to hidden.</td>
</tr>
<tr id="parameter-LaunchTemplateId">
    <td><CopyableCode code="LaunchTemplateId" /></td>
    <td><code>string</code></td>
    <td>The ID of the launch template. You must specify either the launch template ID or the launch template name, but not both.</td>
</tr>
<tr id="parameter-LaunchTemplateName">
    <td><CopyableCode code="LaunchTemplateName" /></td>
    <td><code>string</code></td>
    <td>The name of the launch template. You must specify either the launch template ID or the launch template name, but not both.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value. This value can be between 1 and 200.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to request the next page of results.</td>
</tr>
<tr id="parameter-Operator">
    <td><CopyableCode code="Operator" /></td>
    <td><code>object</code></td>
    <td>Reserved for internal use.</td>
</tr>
<tr id="parameter-SetDefaultVersion">
    <td><CopyableCode code="SetDefaultVersion" /></td>
    <td><code>string</code></td>
    <td>The version number of the launch template to set as the default version.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the launch template on creation. To tag the launch template, the resource type must be launch-template. To specify the tags for the resources that are created when an instance is launched, you must use the TagSpecifications parameter in the launch template data structure.</td>
</tr>
<tr id="parameter-VersionDescription">
    <td><CopyableCode code="VersionDescription" /></td>
    <td><code>string</code></td>
    <td>A description for the first version of the launch template.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_launch_templates"
    values={[
        { label: 'describe_launch_templates', value: 'describe_launch_templates' }
    ]}
>
<TabItem value="describe_launch_templates">

Describes one or more launch templates.

```sql
SELECT
CreateTime,
CreatedBy,
DefaultVersionNumber,
LatestVersionNumber,
LaunchTemplateId,
LaunchTemplateName,
Operator,
Tags
FROM aws.ec2.launch_templates
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND LaunchTemplateId = '{{ LaunchTemplateId }}'
AND LaunchTemplateName = '{{ LaunchTemplateName }}'
AND Filter = '{{ Filter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND IncludeManagedResources = '{{ IncludeManagedResources }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_launch_template"
    values={[
        { label: 'create_launch_template', value: 'create_launch_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_launch_template">

Creates a launch template. A launch template contains the parameters to launch an instance. When you launch an instance using RunInstances, you can specify a launch template instead of providing the launch parameters in the request. For more information, see Store instance launch parameters in Amazon EC2 launch templates in the Amazon EC2 User Guide. To clone an existing launch template as the basis for a new launch template, use the Amazon EC2 console. The API, SDKs, and CLI do not support cloning a template. For more information, see Create a launch template from an existing launch template in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.launch_templates (
LaunchTemplateName,
LaunchTemplateData,
region,
DryRun,
ClientToken,
VersionDescription,
Operator,
TagSpecification
)
SELECT 
'{{ LaunchTemplateName }}',
'{{ LaunchTemplateData }}',
'{{ region }}',
'{{ DryRun }}',
'{{ ClientToken }}',
'{{ VersionDescription }}',
'{{ Operator }}',
'{{ TagSpecification }}'
RETURNING
CreateTime,
CreatedBy,
DefaultVersionNumber,
LatestVersionNumber,
LaunchTemplateId,
LaunchTemplateName,
Operator,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: launch_templates
  props:
    - name: LaunchTemplateName
      value: "{{ LaunchTemplateName }}"
      description: Required parameter for the launch_templates resource.
    - name: LaunchTemplateData
      value: "{{ LaunchTemplateData }}"
      description: Required parameter for the launch_templates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the launch_templates resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If a client token isn't specified, a randomly generated token is used in the request to ensure idempotency. For more information, see Ensuring idempotency. Constraint: Maximum 128 ASCII characters.
      description: Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If a client token isn't specified, a randomly generated token is used in the request to ensure idempotency. For more information, see Ensuring idempotency. Constraint: Maximum 128 ASCII characters.
    - name: VersionDescription
      value: "{{ VersionDescription }}"
      description: A description for the first version of the launch template.
      description: A description for the first version of the launch template.
    - name: Operator
      value: "{{ Operator }}"
      description: Reserved for internal use.
      description: Reserved for internal use.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the launch template on creation. To tag the launch template, the resource type must be launch-template. To specify the tags for the resources that are created when an instance is launched, you must use the TagSpecifications parameter in the launch template data structure.
      description: The tags to apply to the launch template on creation. To tag the launch template, the resource type must be launch-template. To specify the tags for the resources that are created when an instance is launched, you must use the TagSpecifications parameter in the launch template data structure.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_launch_template"
    values={[
        { label: 'modify_launch_template', value: 'modify_launch_template' }
    ]}
>
<TabItem value="modify_launch_template">

Modifies a launch template. You can specify which version of the launch template to set as the default version. When launching an instance, the default version applies when a launch template version is not specified.

```sql
UPDATE aws.ec2.launch_templates
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND ClientToken = '{{ ClientToken}}'
AND LaunchTemplateId = '{{ LaunchTemplateId}}'
AND LaunchTemplateName = '{{ LaunchTemplateName}}'
AND SetDefaultVersion = '{{ SetDefaultVersion}}'
RETURNING
CreateTime,
CreatedBy,
DefaultVersionNumber,
LatestVersionNumber,
LaunchTemplateId,
LaunchTemplateName,
Operator,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_launch_template"
    values={[
        { label: 'delete_launch_template', value: 'delete_launch_template' }
    ]}
>
<TabItem value="delete_launch_template">

Deletes a launch template. Deleting a launch template deletes all of its versions.

```sql
DELETE FROM aws.ec2.launch_templates
WHERE region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
AND LaunchTemplateId = '{{ LaunchTemplateId }}'
AND LaunchTemplateName = '{{ LaunchTemplateName }}'
;
```
</TabItem>
</Tabs>
