--- 
title: layer_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - layer_versions
  - lambda
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

Creates, updates, deletes, gets or lists a <code>layer_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="layer_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.layer_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_layer_version"
    values={[
        { label: 'get_layer_version', value: 'get_layer_version' },
        { label: 'list_layer_versions', value: 'list_layer_versions' }
    ]}
>
<TabItem value="get_layer_version">

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
    <td><CopyableCode code="compatible_architectures" /></td>
    <td><code>array</code></td>
    <td>A list of compatible instruction set architectures.</td>
</tr>
<tr>
    <td><CopyableCode code="compatible_runtimes" /></td>
    <td><code>array</code></td>
    <td>The layer's compatible runtimes. The following list includes deprecated runtimes. For more information, see Runtime use after deprecation. For a list of all currently supported runtimes, see Supported runtimes.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>Details about the layer version.</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string</code></td>
    <td>The date that the layer version was created, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the version.</td>
</tr>
<tr>
    <td><CopyableCode code="layer_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the layer. (pattern: &lt;code&gt;arn:&#91;a-zA-Z0-9-&#93;+:lambda:&#91;a-zA-Z0-9-&#93;+:\d&#123;12&#125;:layer:&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="layer_version_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the layer version. (pattern: &lt;code&gt;arn:&#91;a-zA-Z0-9-&#93;+:lambda:&#91;a-zA-Z0-9-&#93;+:\d&#123;12&#125;:layer:&#91;a-zA-Z0-9-_&#93;+:&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="license_info" /></td>
    <td><code>string</code></td>
    <td>The layer's software license.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_layer_versions">

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
    <td><CopyableCode code="compatible_architectures" /></td>
    <td><code>array</code></td>
    <td>A list of compatible instruction set architectures.</td>
</tr>
<tr>
    <td><CopyableCode code="compatible_runtimes" /></td>
    <td><code>array</code></td>
    <td>The layer's compatible runtimes. The following list includes deprecated runtimes. For more information, see Runtime use after deprecation. For a list of all currently supported runtimes, see Supported runtimes.</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string</code></td>
    <td>The date that the version was created, in ISO 8601 format. For example, 2018-11-27T15:10:45.123+0000.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the version.</td>
</tr>
<tr>
    <td><CopyableCode code="layer_version_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the layer version. (pattern: &lt;code&gt;arn:&#91;a-zA-Z0-9-&#93;+:lambda:&#91;a-zA-Z0-9-&#93;+:\d&#123;12&#125;:layer:&#91;a-zA-Z0-9-_&#93;+:&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="license_info" /></td>
    <td><code>string</code></td>
    <td>The layer's open-source license.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number.</td>
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
    <td><a href="#get_layer_version"><CopyableCode code="get_layer_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-layer_name"><code>layer_name</code></a>, <a href="#parameter-version_number"><code>version_number</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a version of an Lambda layer, with a link to download the layer archive that's valid for 10 minutes.</td>
</tr>
<tr>
    <td><a href="#list_layer_versions"><CopyableCode code="list_layer_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-layer_name"><code>layer_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CompatibleRuntime"><code>CompatibleRuntime</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a>, <a href="#parameter-CompatibleArchitecture"><code>CompatibleArchitecture</code></a></td>
    <td>Lists the versions of an Lambda layer. Versions that have been deleted aren't listed. Specify a runtime identifier to list only versions that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layer versions that are compatible with that architecture.</td>
</tr>
<tr>
    <td><a href="#add_layer_version_permission"><CopyableCode code="add_layer_version_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-layer_name"><code>layer_name</code></a>, <a href="#parameter-version_number"><code>version_number</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StatementId"><code>StatementId</code></a>, <a href="#parameter-Action"><code>Action</code></a>, <a href="#parameter-Principal"><code>Principal</code></a></td>
    <td><a href="#parameter-RevisionId"><code>RevisionId</code></a></td>
    <td>Adds permissions to the resource-based policy of a version of an Lambda layer. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all accounts in an organization, or all Amazon Web Services accounts. To revoke permission, call RemoveLayerVersionPermission with the statement ID that you specified when you added it.</td>
</tr>
<tr>
    <td><a href="#remove_layer_version_permission"><CopyableCode code="remove_layer_version_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-layer_name"><code>layer_name</code></a>, <a href="#parameter-version_number"><code>version_number</code></a>, <a href="#parameter-statement_id"><code>statement_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RevisionId"><code>RevisionId</code></a></td>
    <td>Removes a statement from the permissions policy for a version of an Lambda layer. For more information, see AddLayerVersionPermission.</td>
</tr>
<tr>
    <td><a href="#delete_layer_version"><CopyableCode code="delete_layer_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-layer_name"><code>layer_name</code></a>, <a href="#parameter-version_number"><code>version_number</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a version of an Lambda layer. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.</td>
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
<tr id="parameter-layer_name">
    <td><CopyableCode code="layer_name" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the layer.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-statement_id">
    <td><CopyableCode code="statement_id" /></td>
    <td><code>string</code></td>
    <td>The identifier that was specified when the statement was added.</td>
</tr>
<tr id="parameter-version_number">
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number.</td>
</tr>
<tr id="parameter-CompatibleArchitecture">
    <td><CopyableCode code="CompatibleArchitecture" /></td>
    <td><code>string</code></td>
    <td>The compatible instruction set architecture.</td>
</tr>
<tr id="parameter-CompatibleRuntime">
    <td><CopyableCode code="CompatibleRuntime" /></td>
    <td><code>string</code></td>
    <td>A runtime identifier. The following list includes deprecated runtimes. For more information, see Runtime use after deprecation. For a list of all currently supported runtimes, see Supported runtimes.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned by a previous call.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of versions to return.</td>
</tr>
<tr id="parameter-RevisionId">
    <td><CopyableCode code="RevisionId" /></td>
    <td><code>string</code></td>
    <td>Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_layer_version"
    values={[
        { label: 'get_layer_version', value: 'get_layer_version' },
        { label: 'list_layer_versions', value: 'list_layer_versions' }
    ]}
>
<TabItem value="get_layer_version">

Returns information about a version of an Lambda layer, with a link to download the layer archive that's valid for 10 minutes.

```sql
SELECT
compatible_architectures,
compatible_runtimes,
content,
created_date,
description,
layer_arn,
layer_version_arn,
license_info,
version
FROM aws.lambda.layer_versions
WHERE layer_name = '{{ layer_name }}' -- required
AND version_number = '{{ version_number }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_layer_versions">

Lists the versions of an Lambda layer. Versions that have been deleted aren't listed. Specify a runtime identifier to list only versions that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layer versions that are compatible with that architecture.

```sql
SELECT
compatible_architectures,
compatible_runtimes,
created_date,
description,
layer_version_arn,
license_info,
version
FROM aws.lambda.layer_versions
WHERE layer_name = '{{ layer_name }}' -- required
AND region = '{{ region }}' -- required
AND CompatibleRuntime = '{{ CompatibleRuntime }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
AND CompatibleArchitecture = '{{ CompatibleArchitecture }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_layer_version_permission"
    values={[
        { label: 'add_layer_version_permission', value: 'add_layer_version_permission' },
        { label: 'remove_layer_version_permission', value: 'remove_layer_version_permission' }
    ]}
>
<TabItem value="add_layer_version_permission">

Adds permissions to the resource-based policy of a version of an Lambda layer. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all accounts in an organization, or all Amazon Web Services accounts. To revoke permission, call RemoveLayerVersionPermission with the statement ID that you specified when you added it.

```sql
UPDATE aws.lambda.layer_versions
SET 
StatementId = '{{ StatementId }}',
Action = '{{ Action }}',
Principal = '{{ Principal }}',
OrganizationId = '{{ OrganizationId }}'
WHERE 
layer_name = '{{ layer_name }}' --required
AND version_number = '{{ version_number }}' --required
AND region = '{{ region }}' --required
AND StatementId = '{{ StatementId }}' --required
AND Action = '{{ Action }}' --required
AND Principal = '{{ Principal }}' --required
AND RevisionId = '{{ RevisionId}}'
RETURNING
revision_id,
statement;
```
</TabItem>
<TabItem value="remove_layer_version_permission">

Removes a statement from the permissions policy for a version of an Lambda layer. For more information, see AddLayerVersionPermission.

```sql
UPDATE aws.lambda.layer_versions
SET 
-- No updatable properties
WHERE 
layer_name = '{{ layer_name }}' --required
AND version_number = '{{ version_number }}' --required
AND statement_id = '{{ statement_id }}' --required
AND region = '{{ region }}' --required
AND RevisionId = '{{ RevisionId}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_layer_version"
    values={[
        { label: 'delete_layer_version', value: 'delete_layer_version' }
    ]}
>
<TabItem value="delete_layer_version">

Deletes a version of an Lambda layer. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.

```sql
DELETE FROM aws.lambda.layer_versions
WHERE layer_name = '{{ layer_name }}' --required
AND version_number = '{{ version_number }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
