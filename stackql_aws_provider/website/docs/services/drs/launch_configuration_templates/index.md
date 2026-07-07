--- 
title: launch_configuration_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - launch_configuration_templates
  - drs
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

Creates, updates, deletes, gets or lists a <code>launch_configuration_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="launch_configuration_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.drs.launch_configuration_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_launch_configuration_templates"
    values={[
        { label: 'describe_launch_configuration_templates', value: 'describe_launch_configuration_templates' }
    ]}
>
<TabItem value="describe_launch_configuration_templates">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the Launch Configuration Template. (pattern: &lt;code&gt;arn:.&#123;16,2044&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="copyPrivateIp" /></td>
    <td><code>boolean</code></td>
    <td>Copy private IP.</td>
</tr>
<tr>
    <td><CopyableCode code="copyTags" /></td>
    <td><code>boolean</code></td>
    <td>Copy tags.</td>
</tr>
<tr>
    <td><CopyableCode code="exportBucketArn" /></td>
    <td><code>string</code></td>
    <td>S3 bucket ARN to export Source Network templates. (pattern: &lt;code&gt;arn:.&#123;16,2044&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="launchConfigurationTemplateID" /></td>
    <td><code>string</code></td>
    <td>ID of the Launch Configuration Template. (pattern: &lt;code&gt;lct-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="launchDisposition" /></td>
    <td><code>string</code></td>
    <td>Launch disposition. (STOPPED, STARTED)</td>
</tr>
<tr>
    <td><CopyableCode code="launchIntoSourceInstance" /></td>
    <td><code>boolean</code></td>
    <td>DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.</td>
</tr>
<tr>
    <td><CopyableCode code="licensing" /></td>
    <td><code>object</code></td>
    <td>Configuration of a machine's license.</td>
</tr>
<tr>
    <td><CopyableCode code="postLaunchEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Post-launch actions activated.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags of the Launch Configuration Template.</td>
</tr>
<tr>
    <td><CopyableCode code="targetInstanceTypeRightSizingMethod" /></td>
    <td><code>string</code></td>
    <td>Target instance type right-sizing method. (NONE, BASIC, IN_AWS)</td>
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
    <td><a href="#describe_launch_configuration_templates"><CopyableCode code="describe_launch_configuration_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs</td>
</tr>
<tr>
    <td><a href="#create_launch_configuration_template"><CopyableCode code="create_launch_configuration_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new Launch Configuration Template.</td>
</tr>
<tr>
    <td><a href="#update_launch_configuration_template"><CopyableCode code="update_launch_configuration_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-launchConfigurationTemplateID"><code>launchConfigurationTemplateID</code></a></td>
    <td></td>
    <td>Updates an existing Launch Configuration Template by ID.</td>
</tr>
<tr>
    <td><a href="#delete_launch_configuration_template"><CopyableCode code="delete_launch_configuration_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a single Launch Configuration Template by ID.</td>
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
    defaultValue="describe_launch_configuration_templates"
    values={[
        { label: 'describe_launch_configuration_templates', value: 'describe_launch_configuration_templates' }
    ]}
>
<TabItem value="describe_launch_configuration_templates">

Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs

```sql
SELECT
arn,
copyPrivateIp,
copyTags,
exportBucketArn,
launchConfigurationTemplateID,
launchDisposition,
launchIntoSourceInstance,
licensing,
postLaunchEnabled,
tags,
targetInstanceTypeRightSizingMethod
FROM aws.drs.launch_configuration_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_launch_configuration_template"
    values={[
        { label: 'create_launch_configuration_template', value: 'create_launch_configuration_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_launch_configuration_template">

Creates a new Launch Configuration Template.

```sql
INSERT INTO aws.drs.launch_configuration_templates (
tags,
launchDisposition,
targetInstanceTypeRightSizingMethod,
copyPrivateIp,
copyTags,
licensing,
exportBucketArn,
postLaunchEnabled,
launchIntoSourceInstance,
region
)
SELECT 
'{{ tags }}',
'{{ launchDisposition }}',
'{{ targetInstanceTypeRightSizingMethod }}',
{{ copyPrivateIp }},
{{ copyTags }},
'{{ licensing }}',
'{{ exportBucketArn }}',
{{ postLaunchEnabled }},
{{ launchIntoSourceInstance }},
'{{ region }}'
RETURNING
launchConfigurationTemplate
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: launch_configuration_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the launch_configuration_templates resource.
    - name: tags
      value: "{{ tags }}"
    - name: launchDisposition
      value: "{{ launchDisposition }}"
      valid_values: ['STOPPED', 'STARTED']
    - name: targetInstanceTypeRightSizingMethod
      value: "{{ targetInstanceTypeRightSizingMethod }}"
      valid_values: ['NONE', 'BASIC', 'IN_AWS']
    - name: copyPrivateIp
      value: {{ copyPrivateIp }}
    - name: copyTags
      value: {{ copyTags }}
    - name: licensing
      description: |
        Configuration of a machine's license.
      value:
        osByol: {{ osByol }}
    - name: exportBucketArn
      value: "{{ exportBucketArn }}"
    - name: postLaunchEnabled
      value: {{ postLaunchEnabled }}
    - name: launchIntoSourceInstance
      value: {{ launchIntoSourceInstance }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_launch_configuration_template"
    values={[
        { label: 'update_launch_configuration_template', value: 'update_launch_configuration_template' }
    ]}
>
<TabItem value="update_launch_configuration_template">

Updates an existing Launch Configuration Template by ID.

```sql
UPDATE aws.drs.launch_configuration_templates
SET 
launchConfigurationTemplateID = '{{ launchConfigurationTemplateID }}',
launchDisposition = '{{ launchDisposition }}',
targetInstanceTypeRightSizingMethod = '{{ targetInstanceTypeRightSizingMethod }}',
copyPrivateIp = {{ copyPrivateIp }},
copyTags = {{ copyTags }},
licensing = '{{ licensing }}',
exportBucketArn = '{{ exportBucketArn }}',
postLaunchEnabled = {{ postLaunchEnabled }},
launchIntoSourceInstance = {{ launchIntoSourceInstance }}
WHERE 
region = '{{ region }}' --required
AND launchConfigurationTemplateID = '{{ launchConfigurationTemplateID }}' --required
RETURNING
launchConfigurationTemplate;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_launch_configuration_template"
    values={[
        { label: 'delete_launch_configuration_template', value: 'delete_launch_configuration_template' }
    ]}
>
<TabItem value="delete_launch_configuration_template">

Deletes a single Launch Configuration Template by ID.

```sql
DELETE FROM aws.drs.launch_configuration_templates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
