--- 
title: db_major_engine_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - db_major_engine_versions
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

Creates, updates, deletes, gets or lists a <code>db_major_engine_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_major_engine_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_major_engine_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_major_engine_versions"
    values={[
        { label: 'describe_db_major_engine_versions', value: 'describe_db_major_engine_versions' }
    ]}
>
<TabItem value="describe_db_major_engine_versions">

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
    <td><CopyableCode code="major_engine_version" /></td>
    <td><code>string</code></td>
    <td>The major version number of the database engine.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_engine_lifecycles" /></td>
    <td><code>string</code></td>
    <td>A list of the lifecycles supported by this engine for the DescribeDBMajorEngineVersions operation.</td>
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
    <td><a href="#describe_db_major_engine_versions"><CopyableCode code="describe_db_major_engine_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-MajorEngineVersion"><code>MajorEngineVersion</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Describes the properties of specific major versions of DB engines.</td>
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
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The database engine to return major version details for. Valid Values: aurora-mysql aurora-postgresql custom-sqlserver-ee custom-sqlserver-se custom-sqlserver-web db2-ae db2-ce db2-se mariadb mysql oracle-ee oracle-ee-cdb oracle-se2 oracle-se2-cdb postgres sqlserver-ee sqlserver-se sqlserver-ex sqlserver-web</td>
</tr>
<tr id="parameter-MajorEngineVersion">
    <td><CopyableCode code="MajorEngineVersion" /></td>
    <td><code>string</code></td>
    <td>A specific database major engine version to return details for. Example: 8.4</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more than the MaxRecords value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_major_engine_versions"
    values={[
        { label: 'describe_db_major_engine_versions', value: 'describe_db_major_engine_versions' }
    ]}
>
<TabItem value="describe_db_major_engine_versions">

Describes the properties of specific major versions of DB engines.

```sql
SELECT
engine,
major_engine_version,
supported_engine_lifecycles
FROM aws.rds.db_major_engine_versions
WHERE region = '{{ region }}' -- required
AND Engine = '{{ Engine }}'
AND MajorEngineVersion = '{{ MajorEngineVersion }}'
AND Marker = '{{ Marker }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>
