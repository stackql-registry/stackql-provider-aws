--- 
title: service_sync_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - service_sync_configs
  - proton
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

Creates, updates, deletes, gets or lists a <code>service_sync_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_sync_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.service_sync_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_sync_config"
    values={[
        { label: 'get_service_sync_config', value: 'get_service_sync_config' }
    ]}
>
<TabItem value="get_service_sync_config">

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
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td>The name of the code repository branch that holds the service code Proton will sync with.</td>
</tr>
<tr>
    <td><CopyableCode code="file_path" /></td>
    <td><code>string</code></td>
    <td>The file path to the service sync configuration file.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td>The name of the code repository that holds the service code Proton will sync with. (pattern: &lt;code&gt;&#91;A-Za-z0-9_.-&#93;.*/&#91;A-Za-z0-9_.-&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_provider" /></td>
    <td><code>string</code></td>
    <td>The name of the repository provider that holds the repository Proton will sync with. (GITHUB, GITHUB_ENTERPRISE, BITBUCKET)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service that the service instance is added to. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#get_service_sync_config"><CopyableCode code="get_service_sync_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get detailed information for the service sync configuration.</td>
</tr>
<tr>
    <td><a href="#create_service_sync_config"><CopyableCode code="create_service_sync_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-branch"><code>branch</code></a>, <a href="#parameter-filePath"><code>filePath</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-repositoryProvider"><code>repositoryProvider</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Create the Proton Ops configuration file.</td>
</tr>
<tr>
    <td><a href="#update_service_sync_config"><CopyableCode code="update_service_sync_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-branch"><code>branch</code></a>, <a href="#parameter-filePath"><code>filePath</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-repositoryProvider"><code>repositoryProvider</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Update the Proton Ops config file.</td>
</tr>
<tr>
    <td><a href="#delete_service_sync_config"><CopyableCode code="delete_service_sync_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the Proton Ops file.</td>
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
    defaultValue="get_service_sync_config"
    values={[
        { label: 'get_service_sync_config', value: 'get_service_sync_config' }
    ]}
>
<TabItem value="get_service_sync_config">

Get detailed information for the service sync configuration.

```sql
SELECT
branch,
file_path,
repository_name,
repository_provider,
service_name
FROM aws.proton.service_sync_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_sync_config"
    values={[
        { label: 'create_service_sync_config', value: 'create_service_sync_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_sync_config">

Create the Proton Ops configuration file.

```sql
INSERT INTO aws.proton.service_sync_configs (
branch,
filePath,
repositoryName,
repositoryProvider,
serviceName,
region
)
SELECT 
'{{ branch }}' /* required */,
'{{ filePath }}' /* required */,
'{{ repositoryName }}' /* required */,
'{{ repositoryProvider }}' /* required */,
'{{ serviceName }}' /* required */,
'{{ region }}'
RETURNING
service_sync_config
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_sync_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_sync_configs resource.
    - name: branch
      value: "{{ branch }}"
      description: |
        The repository branch for your Proton Ops file.
    - name: filePath
      value: "{{ filePath }}"
      description: |
        The path to the Proton Ops file.
    - name: repositoryName
      value: "{{ repositoryName }}"
      description: |
        The repository name.
    - name: repositoryProvider
      value: "{{ repositoryProvider }}"
      description: |
        The provider type for your repository.
      valid_values: ['GITHUB', 'GITHUB_ENTERPRISE', 'BITBUCKET']
    - name: serviceName
      value: "{{ serviceName }}"
      description: |
        The name of the service the Proton Ops file is for.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_sync_config"
    values={[
        { label: 'update_service_sync_config', value: 'update_service_sync_config' }
    ]}
>
<TabItem value="update_service_sync_config">

Update the Proton Ops config file.

```sql
UPDATE aws.proton.service_sync_configs
SET 
branch = '{{ branch }}',
filePath = '{{ filePath }}',
repositoryName = '{{ repositoryName }}',
repositoryProvider = '{{ repositoryProvider }}',
serviceName = '{{ serviceName }}'
WHERE 
region = '{{ region }}' --required
AND branch = '{{ branch }}' --required
AND filePath = '{{ filePath }}' --required
AND repositoryName = '{{ repositoryName }}' --required
AND repositoryProvider = '{{ repositoryProvider }}' --required
AND serviceName = '{{ serviceName }}' --required
RETURNING
service_sync_config;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_sync_config"
    values={[
        { label: 'delete_service_sync_config', value: 'delete_service_sync_config' }
    ]}
>
<TabItem value="delete_service_sync_config">

Delete the Proton Ops file.

```sql
DELETE FROM aws.proton.service_sync_configs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
