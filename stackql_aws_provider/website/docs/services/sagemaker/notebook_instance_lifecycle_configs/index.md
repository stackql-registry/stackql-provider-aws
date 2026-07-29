--- 
title: notebook_instance_lifecycle_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - notebook_instance_lifecycle_configs
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

Creates, updates, deletes, gets or lists a <code>notebook_instance_lifecycle_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notebook_instance_lifecycle_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.notebook_instance_lifecycle_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_notebook_instance_lifecycle_config"
    values={[
        { label: 'describe_notebook_instance_lifecycle_config', value: 'describe_notebook_instance_lifecycle_config' },
        { label: 'list_notebook_instance_lifecycle_configs', value: 'list_notebook_instance_lifecycle_configs' }
    ]}
>
<TabItem value="describe_notebook_instance_lifecycle_config">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that tells when the lifecycle configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that tells when the lifecycle configuration was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="notebook_instance_lifecycle_config_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the lifecycle configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="notebook_instance_lifecycle_config_name" /></td>
    <td><code>string</code></td>
    <td>The name of the lifecycle configuration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="on_create" /></td>
    <td><code>array</code></td>
    <td>The shell script that runs only once, when you create a notebook instance.</td>
</tr>
<tr>
    <td><CopyableCode code="on_start" /></td>
    <td><code>array</code></td>
    <td>The shell script that runs every time you start a notebook instance, including when you create the notebook instance.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_notebook_instance_lifecycle_configs">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that tells when the lifecycle configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that tells when the lifecycle configuration was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="notebook_instance_lifecycle_config_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the lifecycle configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="notebook_instance_lifecycle_config_name" /></td>
    <td><code>string</code></td>
    <td>The name of the lifecycle configuration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
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
    <td><a href="#describe_notebook_instance_lifecycle_config"><CopyableCode code="describe_notebook_instance_lifecycle_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of a notebook instance lifecycle configuration. For information about notebook instance lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance.</td>
</tr>
<tr>
    <td><a href="#list_notebook_instance_lifecycle_configs"><CopyableCode code="list_notebook_instance_lifecycle_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists notebook instance lifestyle configurations created with the CreateNotebookInstanceLifecycleConfig API.</td>
</tr>
<tr>
    <td><a href="#create_notebook_instance_lifecycle_config"><CopyableCode code="create_notebook_instance_lifecycle_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NotebookInstanceLifecycleConfigName"><code>NotebookInstanceLifecycleConfigName</code></a></td>
    <td></td>
    <td>Creates a lifecycle configuration that you can associate with a notebook instance. A lifecycle configuration is a collection of shell scripts that run when you create or start a notebook instance. Each lifecycle configuration script has a limit of 16384 characters. The value of the $PATH environment variable that is available to both scripts is /sbin:bin:/usr/sbin:/usr/bin. View Amazon CloudWatch Logs for notebook instance lifecycle configurations in log group /aws/sagemaker/NotebookInstances in log stream &#91;notebook-instance-name&#93;/&#91;LifecycleConfigHook&#93;. Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started. For information about notebook instance lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance. Lifecycle configuration scripts execute with root access and the notebook instance's IAM execution role privileges. Grant this permission only to trusted principals. See Customize a Notebook Instance Using a Lifecycle Configuration Script for security best practices.</td>
</tr>
<tr>
    <td><a href="#update_notebook_instance_lifecycle_config"><CopyableCode code="update_notebook_instance_lifecycle_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NotebookInstanceLifecycleConfigName"><code>NotebookInstanceLifecycleConfigName</code></a></td>
    <td></td>
    <td>Updates a notebook instance lifecycle configuration created with the CreateNotebookInstanceLifecycleConfig API. Updates to lifecycle configurations affect all notebook instances using that configuration upon their next start. Lifecycle configuration scripts execute with root access and the notebook instance's IAM execution role privileges. Grant this permission only to trusted principals. See Customize a Notebook Instance Using a Lifecycle Configuration Script for security best practices.</td>
</tr>
<tr>
    <td><a href="#delete_notebook_instance_lifecycle_config"><CopyableCode code="delete_notebook_instance_lifecycle_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a notebook instance lifecycle configuration.</td>
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
    defaultValue="describe_notebook_instance_lifecycle_config"
    values={[
        { label: 'describe_notebook_instance_lifecycle_config', value: 'describe_notebook_instance_lifecycle_config' },
        { label: 'list_notebook_instance_lifecycle_configs', value: 'list_notebook_instance_lifecycle_configs' }
    ]}
>
<TabItem value="describe_notebook_instance_lifecycle_config">

Returns a description of a notebook instance lifecycle configuration. For information about notebook instance lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance.

```sql
SELECT
creation_time,
last_modified_time,
notebook_instance_lifecycle_config_arn,
notebook_instance_lifecycle_config_name,
on_create,
on_start
FROM aws.sagemaker.notebook_instance_lifecycle_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_notebook_instance_lifecycle_configs">

Lists notebook instance lifestyle configurations created with the CreateNotebookInstanceLifecycleConfig API.

```sql
SELECT
creation_time,
last_modified_time,
notebook_instance_lifecycle_config_arn,
notebook_instance_lifecycle_config_name
FROM aws.sagemaker.notebook_instance_lifecycle_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_notebook_instance_lifecycle_config"
    values={[
        { label: 'create_notebook_instance_lifecycle_config', value: 'create_notebook_instance_lifecycle_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_notebook_instance_lifecycle_config">

Creates a lifecycle configuration that you can associate with a notebook instance. A lifecycle configuration is a collection of shell scripts that run when you create or start a notebook instance. Each lifecycle configuration script has a limit of 16384 characters. The value of the $PATH environment variable that is available to both scripts is /sbin:bin:/usr/sbin:/usr/bin. View Amazon CloudWatch Logs for notebook instance lifecycle configurations in log group /aws/sagemaker/NotebookInstances in log stream [notebook-instance-name]/[LifecycleConfigHook]. Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started. For information about notebook instance lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance. Lifecycle configuration scripts execute with root access and the notebook instance's IAM execution role privileges. Grant this permission only to trusted principals. See Customize a Notebook Instance Using a Lifecycle Configuration Script for security best practices.

```sql
INSERT INTO aws.sagemaker.notebook_instance_lifecycle_configs (
NotebookInstanceLifecycleConfigName,
OnCreate,
OnStart,
Tags,
region
)
SELECT 
'{{ NotebookInstanceLifecycleConfigName }}' /* required */,
'{{ OnCreate }}',
'{{ OnStart }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
notebook_instance_lifecycle_config_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notebook_instance_lifecycle_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the notebook_instance_lifecycle_configs resource.
    - name: NotebookInstanceLifecycleConfigName
      value: "{{ NotebookInstanceLifecycleConfigName }}"
      description: |
        The name of the lifecycle configuration.
    - name: OnCreate
      description: |
        A shell script that runs only once, when you create a notebook instance. The shell script must be a base64-encoded string.
      value:
        - Content: "{{ Content }}"
    - name: OnStart
      description: |
        A shell script that runs every time you start a notebook instance, including when you create the notebook instance. The shell script must be a base64-encoded string.
      value:
        - Content: "{{ Content }}"
    - name: Tags
      description: |
        An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_notebook_instance_lifecycle_config"
    values={[
        { label: 'update_notebook_instance_lifecycle_config', value: 'update_notebook_instance_lifecycle_config' }
    ]}
>
<TabItem value="update_notebook_instance_lifecycle_config">

Updates a notebook instance lifecycle configuration created with the CreateNotebookInstanceLifecycleConfig API. Updates to lifecycle configurations affect all notebook instances using that configuration upon their next start. Lifecycle configuration scripts execute with root access and the notebook instance's IAM execution role privileges. Grant this permission only to trusted principals. See Customize a Notebook Instance Using a Lifecycle Configuration Script for security best practices.

```sql
UPDATE aws.sagemaker.notebook_instance_lifecycle_configs
SET 
NotebookInstanceLifecycleConfigName = '{{ NotebookInstanceLifecycleConfigName }}',
OnCreate = '{{ OnCreate }}',
OnStart = '{{ OnStart }}'
WHERE 
region = '{{ region }}' --required
AND NotebookInstanceLifecycleConfigName = '{{ NotebookInstanceLifecycleConfigName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_notebook_instance_lifecycle_config"
    values={[
        { label: 'delete_notebook_instance_lifecycle_config', value: 'delete_notebook_instance_lifecycle_config' }
    ]}
>
<TabItem value="delete_notebook_instance_lifecycle_config">

Deletes a notebook instance lifecycle configuration.

```sql
DELETE FROM aws.sagemaker.notebook_instance_lifecycle_configs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
