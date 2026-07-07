--- 
title: studio_lifecycle_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - studio_lifecycle_configs
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>studio_lifecycle_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="studio_lifecycle_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.studio_lifecycle_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_studio_lifecycle_config"
    values={[
        { label: 'describe_studio_lifecycle_config', value: 'describe_studio_lifecycle_config' },
        { label: 'list_studio_lifecycle_configs', value: 'list_studio_lifecycle_configs' }
    ]}
>
<TabItem value="describe_studio_lifecycle_config">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the Amazon SageMaker AI Studio Lifecycle Configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>This value is equivalent to CreationTime because Amazon SageMaker AI Studio Lifecycle Configurations are immutable.</td>
</tr>
<tr>
    <td><CopyableCode code="StudioLifecycleConfigAppType" /></td>
    <td><code>string</code></td>
    <td>The App type that the Lifecycle Configuration is attached to. (JupyterServer, KernelGateway, CodeEditor, JupyterLab)</td>
</tr>
<tr>
    <td><CopyableCode code="StudioLifecycleConfigArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Lifecycle Configuration to describe. (pattern: &lt;code&gt;(arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:studio-lifecycle-config/.*|None)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StudioLifecycleConfigContent" /></td>
    <td><code>string</code></td>
    <td>The content of your Amazon SageMaker AI Studio Lifecycle Configuration script. (pattern: &lt;code&gt;&#91;\S\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StudioLifecycleConfigName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon SageMaker AI Studio Lifecycle Configuration that is described. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_studio_lifecycle_configs">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the Amazon SageMaker AI Studio Lifecycle Configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>This value is equivalent to CreationTime because Amazon SageMaker AI Studio Lifecycle Configurations are immutable.</td>
</tr>
<tr>
    <td><CopyableCode code="StudioLifecycleConfigAppType" /></td>
    <td><code>string</code></td>
    <td>The App type to which the Lifecycle Configuration is attached. (JupyterServer, KernelGateway, CodeEditor, JupyterLab)</td>
</tr>
<tr>
    <td><CopyableCode code="StudioLifecycleConfigArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Lifecycle Configuration. (pattern: &lt;code&gt;(arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:studio-lifecycle-config/.*|None)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StudioLifecycleConfigName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon SageMaker AI Studio Lifecycle Configuration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_studio_lifecycle_config"><CopyableCode code="describe_studio_lifecycle_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the Amazon SageMaker AI Studio Lifecycle Configuration.</td>
</tr>
<tr>
    <td><a href="#list_studio_lifecycle_configs"><CopyableCode code="list_studio_lifecycle_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the Amazon SageMaker AI Studio Lifecycle Configurations in your Amazon Web Services Account.</td>
</tr>
<tr>
    <td><a href="#create_studio_lifecycle_config"><CopyableCode code="create_studio_lifecycle_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StudioLifecycleConfigName"><code>StudioLifecycleConfigName</code></a>, <a href="#parameter-StudioLifecycleConfigContent"><code>StudioLifecycleConfigContent</code></a>, <a href="#parameter-StudioLifecycleConfigAppType"><code>StudioLifecycleConfigAppType</code></a></td>
    <td></td>
    <td>Creates a new Amazon SageMaker AI Studio Lifecycle Configuration.</td>
</tr>
<tr>
    <td><a href="#delete_studio_lifecycle_config"><CopyableCode code="delete_studio_lifecycle_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the Amazon SageMaker AI Studio Lifecycle Configuration. In order to delete the Lifecycle Configuration, there must be no running apps using the Lifecycle Configuration. You must also remove the Lifecycle Configuration from UserSettings in all Domains and UserProfiles.</td>
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
    defaultValue="describe_studio_lifecycle_config"
    values={[
        { label: 'describe_studio_lifecycle_config', value: 'describe_studio_lifecycle_config' },
        { label: 'list_studio_lifecycle_configs', value: 'list_studio_lifecycle_configs' }
    ]}
>
<TabItem value="describe_studio_lifecycle_config">

Describes the Amazon SageMaker AI Studio Lifecycle Configuration.

```sql
SELECT
CreationTime,
LastModifiedTime,
StudioLifecycleConfigAppType,
StudioLifecycleConfigArn,
StudioLifecycleConfigContent,
StudioLifecycleConfigName
FROM aws.sagemaker.studio_lifecycle_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_studio_lifecycle_configs">

Lists the Amazon SageMaker AI Studio Lifecycle Configurations in your Amazon Web Services Account.

```sql
SELECT
CreationTime,
LastModifiedTime,
StudioLifecycleConfigAppType,
StudioLifecycleConfigArn,
StudioLifecycleConfigName
FROM aws.sagemaker.studio_lifecycle_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_studio_lifecycle_config"
    values={[
        { label: 'create_studio_lifecycle_config', value: 'create_studio_lifecycle_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_studio_lifecycle_config">

Creates a new Amazon SageMaker AI Studio Lifecycle Configuration.

```sql
INSERT INTO aws.sagemaker.studio_lifecycle_configs (
StudioLifecycleConfigName,
StudioLifecycleConfigContent,
StudioLifecycleConfigAppType,
Tags,
region
)
SELECT 
'{{ StudioLifecycleConfigName }}' /* required */,
'{{ StudioLifecycleConfigContent }}' /* required */,
'{{ StudioLifecycleConfigAppType }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
StudioLifecycleConfigArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: studio_lifecycle_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the studio_lifecycle_configs resource.
    - name: StudioLifecycleConfigName
      value: "{{ StudioLifecycleConfigName }}"
      description: |
        The name of the Amazon SageMaker AI Studio Lifecycle Configuration to create.
    - name: StudioLifecycleConfigContent
      value: "{{ StudioLifecycleConfigContent }}"
      description: |
        The content of your Amazon SageMaker AI Studio Lifecycle Configuration script. This content must be base64 encoded.
    - name: StudioLifecycleConfigAppType
      value: "{{ StudioLifecycleConfigAppType }}"
      description: |
        The App type that the Lifecycle Configuration is attached to.
      valid_values: ['JupyterServer', 'KernelGateway', 'CodeEditor', 'JupyterLab']
    - name: Tags
      description: |
        Tags to be associated with the Lifecycle Configuration. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_studio_lifecycle_config"
    values={[
        { label: 'delete_studio_lifecycle_config', value: 'delete_studio_lifecycle_config' }
    ]}
>
<TabItem value="delete_studio_lifecycle_config">

Deletes the Amazon SageMaker AI Studio Lifecycle Configuration. In order to delete the Lifecycle Configuration, there must be no running apps using the Lifecycle Configuration. You must also remove the Lifecycle Configuration from UserSettings in all Domains and UserProfiles.

```sql
DELETE FROM aws.sagemaker.studio_lifecycle_configs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
