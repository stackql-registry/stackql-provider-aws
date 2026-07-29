--- 
title: serverless_v2_platform_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - serverless_v2_platform_versions
  - rds
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

Creates, updates, deletes, gets or lists a <code>serverless_v2_platform_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="serverless_v2_platform_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.serverless_v2_platform_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_serverless_v2_platform_versions"
    values={[
        { label: 'describe_serverless_v2_platform_versions', value: 'describe_serverless_v2_platform_versions' }
    ]}
>
<TabItem value="describe_serverless_v2_platform_versions">

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
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The name of the database engine.</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this platform version is the default version for the engine. The default platform version is the version used for new DB clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_v2_features_support" /></td>
    <td><code>string</code></td>
    <td>Specifies any Aurora Serverless v2 properties or limits that differ between Aurora Serverless v2 platform versions. You can retrieve the platform version of an existing DB cluster and check whether that version supports certain Aurora Serverless v2 features before you attempt to use those features.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_v2_platform_version" /></td>
    <td><code>string</code></td>
    <td>The version number of the serverless platform.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_v2_platform_version_description" /></td>
    <td><code>string</code></td>
    <td>The description of the serverless platform.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the serverless platform. Valid statuses are the following: enabled - The platform version is in use. disabled - The platform version is not in use.</td>
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
    <td><a href="#describe_serverless_v2_platform_versions"><CopyableCode code="describe_serverless_v2_platform_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ServerlessV2PlatformVersion"><code>ServerlessV2PlatformVersion</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-DefaultOnly"><code>DefaultOnly</code></a>, <a href="#parameter-IncludeAll"><code>IncludeAll</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Describes the properties of specific platform versions for Aurora Serverless v2.</td>
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
<tr id="parameter-DefaultOnly">
    <td><CopyableCode code="DefaultOnly" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to return only the default platform versions for each engine. The default platform version is the version used for new DB clusters.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The database engine to return platform version details for. Valid Values: aurora-mysql aurora-postgresql</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter isn't currently supported.</td>
</tr>
<tr id="parameter-IncludeAll">
    <td><CopyableCode code="IncludeAll" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to also include platform versions which are no longer in use.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more than the MaxRecords value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 20 Constraints: Minimum 1, maximum 200.</td>
</tr>
<tr id="parameter-ServerlessV2PlatformVersion">
    <td><CopyableCode code="ServerlessV2PlatformVersion" /></td>
    <td><code>string</code></td>
    <td>A specific platform version to return details for. Example: 3</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_serverless_v2_platform_versions"
    values={[
        { label: 'describe_serverless_v2_platform_versions', value: 'describe_serverless_v2_platform_versions' }
    ]}
>
<TabItem value="describe_serverless_v2_platform_versions">

Describes the properties of specific platform versions for Aurora Serverless v2.

```sql
SELECT
engine,
is_default,
serverless_v2_features_support,
serverless_v2_platform_version,
serverless_v2_platform_version_description,
status
FROM aws.rds.serverless_v2_platform_versions
WHERE region = '{{ region }}' -- required
AND ServerlessV2PlatformVersion = '{{ ServerlessV2PlatformVersion }}'
AND Engine = '{{ Engine }}'
AND Filters = '{{ Filters }}'
AND DefaultOnly = '{{ DefaultOnly }}'
AND IncludeAll = '{{ IncludeAll }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
