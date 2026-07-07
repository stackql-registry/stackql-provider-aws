--- 
title: template_sync_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - template_sync_configs
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

Creates, updates, deletes, gets or lists a <code>template_sync_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="template_sync_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.template_sync_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_template_sync_config"
    values={[
        { label: 'get_template_sync_config', value: 'get_template_sync_config' }
    ]}
>
<TabItem value="get_template_sync_config">

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
    <td>The repository branch.</td>
</tr>
<tr>
    <td><CopyableCode code="repositoryName" /></td>
    <td><code>string</code></td>
    <td>The repository name (for example, myrepos/myrepo). (pattern: &lt;code&gt;&#91;A-Za-z0-9_.-&#93;.*/&#91;A-Za-z0-9_.-&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repositoryProvider" /></td>
    <td><code>string</code></td>
    <td>The repository provider. (GITHUB, GITHUB_ENTERPRISE, BITBUCKET)</td>
</tr>
<tr>
    <td><CopyableCode code="subdirectory" /></td>
    <td><code>string</code></td>
    <td>A subdirectory path to your template bundle version.</td>
</tr>
<tr>
    <td><CopyableCode code="templateName" /></td>
    <td><code>string</code></td>
    <td>The template name. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="templateType" /></td>
    <td><code>string</code></td>
    <td>The template type. (ENVIRONMENT, SERVICE)</td>
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
    <td><a href="#get_template_sync_config"><CopyableCode code="get_template_sync_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get detail data for a template sync configuration.</td>
</tr>
<tr>
    <td><a href="#create_template_sync_config"><CopyableCode code="create_template_sync_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-branch"><code>branch</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-repositoryProvider"><code>repositoryProvider</code></a>, <a href="#parameter-templateName"><code>templateName</code></a>, <a href="#parameter-templateType"><code>templateType</code></a></td>
    <td></td>
    <td>Set up a template to create new template versions automatically by tracking a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see CreateRepository. When a commit is pushed to your linked repository, Proton checks for changes to your repository template bundles. If it detects a template bundle change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see Template sync configurations in the Proton User Guide.</td>
</tr>
<tr>
    <td><a href="#update_template_sync_config"><CopyableCode code="update_template_sync_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-branch"><code>branch</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-repositoryProvider"><code>repositoryProvider</code></a>, <a href="#parameter-templateName"><code>templateName</code></a>, <a href="#parameter-templateType"><code>templateType</code></a></td>
    <td></td>
    <td>Update template sync configuration parameters, except for the templateName and templateType. Repository details (branch, name, and provider) should be of a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see CreateRepository.</td>
</tr>
<tr>
    <td><a href="#delete_template_sync_config"><CopyableCode code="delete_template_sync_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a template sync configuration.</td>
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
    defaultValue="get_template_sync_config"
    values={[
        { label: 'get_template_sync_config', value: 'get_template_sync_config' }
    ]}
>
<TabItem value="get_template_sync_config">

Get detail data for a template sync configuration.

```sql
SELECT
branch,
repositoryName,
repositoryProvider,
subdirectory,
templateName,
templateType
FROM aws.proton.template_sync_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_template_sync_config"
    values={[
        { label: 'create_template_sync_config', value: 'create_template_sync_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_template_sync_config">

Set up a template to create new template versions automatically by tracking a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see CreateRepository. When a commit is pushed to your linked repository, Proton checks for changes to your repository template bundles. If it detects a template bundle change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see Template sync configurations in the Proton User Guide.

```sql
INSERT INTO aws.proton.template_sync_configs (
branch,
repositoryName,
repositoryProvider,
subdirectory,
templateName,
templateType,
region
)
SELECT 
'{{ branch }}' /* required */,
'{{ repositoryName }}' /* required */,
'{{ repositoryProvider }}' /* required */,
'{{ subdirectory }}',
'{{ templateName }}' /* required */,
'{{ templateType }}' /* required */,
'{{ region }}'
RETURNING
templateSyncConfig
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: template_sync_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the template_sync_configs resource.
    - name: branch
      value: "{{ branch }}"
      description: |
        The repository branch for your template.
    - name: repositoryName
      value: "{{ repositoryName }}"
      description: |
        The repository name (for example, myrepos/myrepo).
    - name: repositoryProvider
      value: "{{ repositoryProvider }}"
      description: |
        The provider type for your repository.
      valid_values: ['GITHUB', 'GITHUB_ENTERPRISE', 'BITBUCKET']
    - name: subdirectory
      value: "{{ subdirectory }}"
      description: |
        A repository subdirectory path to your template bundle directory. When included, Proton limits the template bundle search to this repository directory.
    - name: templateName
      value: "{{ templateName }}"
      description: |
        The name of your registered template.
    - name: templateType
      value: "{{ templateType }}"
      description: |
        The type of the registered template.
      valid_values: ['ENVIRONMENT', 'SERVICE']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_template_sync_config"
    values={[
        { label: 'update_template_sync_config', value: 'update_template_sync_config' }
    ]}
>
<TabItem value="update_template_sync_config">

Update template sync configuration parameters, except for the templateName and templateType. Repository details (branch, name, and provider) should be of a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see CreateRepository.

```sql
UPDATE aws.proton.template_sync_configs
SET 
branch = '{{ branch }}',
repositoryName = '{{ repositoryName }}',
repositoryProvider = '{{ repositoryProvider }}',
subdirectory = '{{ subdirectory }}',
templateName = '{{ templateName }}',
templateType = '{{ templateType }}'
WHERE 
region = '{{ region }}' --required
AND branch = '{{ branch }}' --required
AND repositoryName = '{{ repositoryName }}' --required
AND repositoryProvider = '{{ repositoryProvider }}' --required
AND templateName = '{{ templateName }}' --required
AND templateType = '{{ templateType }}' --required
RETURNING
templateSyncConfig;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_template_sync_config"
    values={[
        { label: 'delete_template_sync_config', value: 'delete_template_sync_config' }
    ]}
>
<TabItem value="delete_template_sync_config">

Delete a template sync configuration.

```sql
DELETE FROM aws.proton.template_sync_configs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
