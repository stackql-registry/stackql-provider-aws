--- 
title: configuration_bundle_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_bundle_versions
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

Creates, updates, deletes, gets or lists a <code>configuration_bundle_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_bundle_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.configuration_bundle_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configuration_bundle_version"
    values={[
        { label: 'get_configuration_bundle_version', value: 'get_configuration_bundle_version' },
        { label: 'list_configuration_bundle_versions', value: 'list_configuration_bundle_versions' }
    ]}
>
<TabItem value="get_configuration_bundle_version">

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
    <td><CopyableCode code="bundleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configuration bundle. (pattern: &lt;code&gt;arn:aws:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:configuration-bundle/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bundleId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the configuration bundle. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bundleName" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration bundle. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,99&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="components" /></td>
    <td><code>object</code></td>
    <td>A map of component identifiers to their configurations for this version.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the configuration bundle was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configuration bundle. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lineageMetadata" /></td>
    <td><code>object</code></td>
    <td>The version lineage metadata, including parent versions, branch name, and creation source.</td>
</tr>
<tr>
    <td><CopyableCode code="versionCreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this specific version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="versionId" /></td>
    <td><code>string</code></td>
    <td>The version identifier of this configuration bundle version. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configuration_bundle_versions">

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
    <td><CopyableCode code="bundleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configuration bundle. (pattern: &lt;code&gt;arn:aws:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:configuration-bundle/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bundleId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the configuration bundle. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lineageMetadata" /></td>
    <td><code>object</code></td>
    <td>The version lineage metadata, including parent versions, branch name, and creation source.</td>
</tr>
<tr>
    <td><CopyableCode code="versionCreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="versionId" /></td>
    <td><code>string</code></td>
    <td>The version identifier of this configuration bundle version. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_configuration_bundle_version"><CopyableCode code="get_configuration_bundle_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bundle_id"><code>bundle_id</code></a>, <a href="#parameter-version_id"><code>version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a specific version of a configuration bundle by its version identifier.</td>
</tr>
<tr>
    <td><a href="#list_configuration_bundle_versions"><CopyableCode code="list_configuration_bundle_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bundle_id"><code>bundle_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all versions of a configuration bundle, with optional filtering by branch name or creation source.</td>
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
    <td>The unique identifier of the configuration bundle to list versions for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version_id">
    <td><CopyableCode code="version_id" /></td>
    <td><code>string</code></td>
    <td>The version identifier of the configuration bundle version to retrieve.</td>
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
    defaultValue="get_configuration_bundle_version"
    values={[
        { label: 'get_configuration_bundle_version', value: 'get_configuration_bundle_version' },
        { label: 'list_configuration_bundle_versions', value: 'list_configuration_bundle_versions' }
    ]}
>
<TabItem value="get_configuration_bundle_version">

Gets a specific version of a configuration bundle by its version identifier.

```sql
SELECT
bundleArn,
bundleId,
bundleName,
components,
createdAt,
description,
lineageMetadata,
versionCreatedAt,
versionId
FROM aws.bedrock_agentcore_control.configuration_bundle_versions
WHERE bundle_id = '{{ bundle_id }}' -- required
AND version_id = '{{ version_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configuration_bundle_versions">

Lists all versions of a configuration bundle, with optional filtering by branch name or creation source.

```sql
SELECT
bundleArn,
bundleId,
lineageMetadata,
versionCreatedAt,
versionId
FROM aws.bedrock_agentcore_control.configuration_bundle_versions
WHERE bundle_id = '{{ bundle_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
