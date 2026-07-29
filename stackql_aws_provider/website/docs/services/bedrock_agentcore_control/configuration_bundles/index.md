--- 
title: configuration_bundles
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_bundles
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists a <code>configuration_bundles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_bundles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.configuration_bundles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configuration_bundle"
    values={[
        { label: 'get_configuration_bundle', value: 'get_configuration_bundle' },
        { label: 'list_configuration_bundles', value: 'list_configuration_bundles' }
    ]}
>
<TabItem value="get_configuration_bundle">

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
    <td><CopyableCode code="bundle_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configuration bundle. (pattern: &lt;code&gt;arn:aws:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:configuration-bundle/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bundle_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the configuration bundle. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bundle_name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration bundle. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,99&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="components" /></td>
    <td><code>object</code></td>
    <td>A map of component identifiers to their configurations for this version.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the configuration bundle was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configuration bundle. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lineage_metadata" /></td>
    <td><code>object</code></td>
    <td>The version lineage metadata, including parent versions, branch name, and creation source.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the configuration bundle was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version_id" /></td>
    <td><code>string</code></td>
    <td>The version identifier of this configuration bundle. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configuration_bundles">

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
    <td><CopyableCode code="bundle_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configuration bundle. (pattern: &lt;code&gt;arn:aws:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:configuration-bundle/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bundle_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the configuration bundle. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bundle_name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration bundle. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,99&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configuration bundle. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
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
    <td><a href="#get_configuration_bundle"><CopyableCode code="get_configuration_bundle" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bundle_id"><code>bundle_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-branchName"><code>branchName</code></a></td>
    <td>Gets the latest version of a configuration bundle. By default, returns the latest version on the mainline branch. Use GetConfigurationBundleVersion to retrieve a specific historical version.</td>
</tr>
<tr>
    <td><a href="#list_configuration_bundles"><CopyableCode code="list_configuration_bundles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all configuration bundles in the account.</td>
</tr>
<tr>
    <td><a href="#create_configuration_bundle"><CopyableCode code="create_configuration_bundle" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bundleName"><code>bundleName</code></a>, <a href="#parameter-components"><code>components</code></a></td>
    <td></td>
    <td>Creates a new configuration bundle resource. A configuration bundle stores versioned component configurations for agent evaluation workflows.</td>
</tr>
<tr>
    <td><a href="#update_configuration_bundle"><CopyableCode code="update_configuration_bundle" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bundle_id"><code>bundle_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a configuration bundle by creating a new version with the specified changes. Each update creates a new version in the version history.</td>
</tr>
<tr>
    <td><a href="#delete_configuration_bundle"><CopyableCode code="delete_configuration_bundle" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bundle_id"><code>bundle_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a configuration bundle and all of its versions.</td>
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
<tr id="parameter-bundle_id">
    <td><CopyableCode code="bundle_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the configuration bundle to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-branchName">
    <td><CopyableCode code="branchName" /></td>
    <td><code>string</code></td>
    <td>The branch name to get the latest version from. If not specified, returns the latest version on the mainline branch.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_configuration_bundle"
    values={[
        { label: 'get_configuration_bundle', value: 'get_configuration_bundle' },
        { label: 'list_configuration_bundles', value: 'list_configuration_bundles' }
    ]}
>
<TabItem value="get_configuration_bundle">

Gets the latest version of a configuration bundle. By default, returns the latest version on the mainline branch. Use GetConfigurationBundleVersion to retrieve a specific historical version.

```sql
SELECT
bundle_arn,
bundle_id,
bundle_name,
components,
created_at,
description,
lineage_metadata,
updated_at,
version_id
FROM aws.bedrock_agentcore_control.configuration_bundles
WHERE bundle_id = '{{ bundle_id }}' -- required
AND region = '{{ region }}' -- required
AND branchName = '{{ branchName }}'
;
```
</TabItem>
<TabItem value="list_configuration_bundles">

Lists all configuration bundles in the account.

```sql
SELECT
bundle_arn,
bundle_id,
bundle_name,
description
FROM aws.bedrock_agentcore_control.configuration_bundles
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configuration_bundle"
    values={[
        { label: 'create_configuration_bundle', value: 'create_configuration_bundle' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configuration_bundle">

Creates a new configuration bundle resource. A configuration bundle stores versioned component configurations for agent evaluation workflows.

```sql
INSERT INTO aws.bedrock_agentcore_control.configuration_bundles (
clientToken,
bundleName,
description,
components,
branchName,
commitMessage,
createdBy,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ bundleName }}' /* required */,
'{{ description }}',
'{{ components }}' /* required */,
'{{ branchName }}',
'{{ commitMessage }}',
'{{ createdBy }}',
'{{ tags }}',
'{{ region }}'
RETURNING
bundle_arn,
bundle_id,
created_at,
version_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configuration_bundles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configuration_bundles resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: bundleName
      value: "{{ bundleName }}"
    - name: description
      value: "{{ description }}"
    - name: components
      value: "{{ components }}"
    - name: branchName
      value: "{{ branchName }}"
    - name: commitMessage
      value: "{{ commitMessage }}"
    - name: createdBy
      description: |
        The source that created a configuration bundle version.
      value:
        name: "{{ name }}"
        arn: "{{ arn }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_configuration_bundle"
    values={[
        { label: 'update_configuration_bundle', value: 'update_configuration_bundle' }
    ]}
>
<TabItem value="update_configuration_bundle">

Updates a configuration bundle by creating a new version with the specified changes. Each update creates a new version in the version history.

```sql
UPDATE aws.bedrock_agentcore_control.configuration_bundles
SET 
clientToken = '{{ clientToken }}',
bundleName = '{{ bundleName }}',
description = '{{ description }}',
components = '{{ components }}',
parentVersionIds = '{{ parentVersionIds }}',
branchName = '{{ branchName }}',
commitMessage = '{{ commitMessage }}',
createdBy = '{{ createdBy }}'
WHERE 
bundle_id = '{{ bundle_id }}' --required
AND region = '{{ region }}' --required
RETURNING
bundle_arn,
bundle_id,
updated_at,
version_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configuration_bundle"
    values={[
        { label: 'delete_configuration_bundle', value: 'delete_configuration_bundle' }
    ]}
>
<TabItem value="delete_configuration_bundle">

Deletes a configuration bundle and all of its versions.

```sql
DELETE FROM aws.bedrock_agentcore_control.configuration_bundles
WHERE bundle_id = '{{ bundle_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
