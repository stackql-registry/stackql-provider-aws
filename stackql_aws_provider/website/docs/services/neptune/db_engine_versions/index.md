--- 
title: db_engine_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - db_engine_versions
  - neptune
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

Creates, updates, deletes, gets or lists a <code>db_engine_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_engine_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune.db_engine_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_engine_versions"
    values={[
        { label: 'describe_db_engine_versions', value: 'describe_db_engine_versions' }
    ]}
>
<TabItem value="describe_db_engine_versions">

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
    <td><CopyableCode code="DBEngineDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the database engine.</td>
</tr>
<tr>
    <td><CopyableCode code="DBEngineVersionDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the database engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="DBParameterGroupFamily" /></td>
    <td><code>string</code></td>
    <td>The name of the DB parameter group family for the database engine.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultCharacterSet" /></td>
    <td><code>string</code></td>
    <td>(Not supported by Neptune)</td>
</tr>
<tr>
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The name of the database engine.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The version number of the database engine.</td>
</tr>
<tr>
    <td><CopyableCode code="ExportableLogTypes" /></td>
    <td><code>string</code></td>
    <td>The types of logs that the database engine has available for export to CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedCharacterSets" /></td>
    <td><code>string</code></td>
    <td>(Not supported by Neptune)</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedTimezones" /></td>
    <td><code>string</code></td>
    <td>A list of the time zones supported by this engine for the Timezone parameter of the CreateDBInstance action.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportsGlobalDatabases" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates whether you can use Aurora global databases with a specific DB engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportsLogExportsToCloudwatchLogs" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates whether the engine version supports exporting the log types specified by ExportableLogTypes to CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportsReadReplica" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the database engine version supports read replicas.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidUpgradeTarget" /></td>
    <td><code>string</code></td>
    <td>A list of engine versions that this database engine version can be upgraded to.</td>
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
    <td><a href="#describe_db_engine_versions"><CopyableCode code="describe_db_engine_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-DBParameterGroupFamily"><code>DBParameterGroupFamily</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-DefaultOnly"><code>DefaultOnly</code></a>, <a href="#parameter-ListSupportedCharacterSets"><code>ListSupportedCharacterSets</code></a>, <a href="#parameter-ListSupportedTimezones"><code>ListSupportedTimezones</code></a></td>
    <td>Returns a list of the available DB engines.</td>
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
<tr id="parameter-DBParameterGroupFamily">
    <td><CopyableCode code="DBParameterGroupFamily" /></td>
    <td><code>string</code></td>
    <td>The name of a specific DB parameter group family to return details for. Constraints: If supplied, must match an existing DBParameterGroupFamily.</td>
</tr>
<tr id="parameter-DefaultOnly">
    <td><CopyableCode code="DefaultOnly" /></td>
    <td><code>boolean</code></td>
    <td>Indicates that only the default version of the specified engine or engine and major version combination is returned.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The database engine to return.</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The database engine version to return. Example: 5.1.49</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>Not currently supported.</td>
</tr>
<tr id="parameter-ListSupportedCharacterSets">
    <td><CopyableCode code="ListSupportedCharacterSets" /></td>
    <td><code>boolean</code></td>
    <td>If this parameter is specified and the requested engine supports the CharacterSetName parameter for CreateDBInstance, the response includes a list of supported character sets for each engine version.</td>
</tr>
<tr id="parameter-ListSupportedTimezones">
    <td><CopyableCode code="ListSupportedTimezones" /></td>
    <td><code>boolean</code></td>
    <td>If this parameter is specified and the requested engine supports the TimeZone parameter for CreateDBInstance, the response includes a list of supported time zones for each engine version.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more than the MaxRecords value is available, a pagination token called a marker is included in the response so that the following results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_engine_versions"
    values={[
        { label: 'describe_db_engine_versions', value: 'describe_db_engine_versions' }
    ]}
>
<TabItem value="describe_db_engine_versions">

Returns a list of the available DB engines.

```sql
SELECT
DBEngineDescription,
DBEngineVersionDescription,
DBParameterGroupFamily,
DefaultCharacterSet,
Engine,
EngineVersion,
ExportableLogTypes,
SupportedCharacterSets,
SupportedTimezones,
SupportsGlobalDatabases,
SupportsLogExportsToCloudwatchLogs,
SupportsReadReplica,
ValidUpgradeTarget
FROM aws.neptune.db_engine_versions
WHERE region = '{{ region }}' -- required
AND Engine = '{{ Engine }}'
AND EngineVersion = '{{ EngineVersion }}'
AND DBParameterGroupFamily = '{{ DBParameterGroupFamily }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND DefaultOnly = '{{ DefaultOnly }}'
AND ListSupportedCharacterSets = '{{ ListSupportedCharacterSets }}'
AND ListSupportedTimezones = '{{ ListSupportedTimezones }}'
;
```
</TabItem>
</Tabs>
