--- 
title: application_components
hide_title: false
hide_table_of_contents: false
keywords:
  - application_components
  - migrationhubstrategy
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

Creates, updates, deletes, gets or lists an <code>application_components</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_components" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migrationhubstrategy.application_components" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_application_components"
    values={[
        { label: 'list_application_components', value: 'list_application_components' }
    ]}
>
<TabItem value="list_application_components">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application component. (pattern: &lt;code&gt;^&#91;0-9a-b&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of application component.</td>
</tr>
<tr>
    <td><CopyableCode code="analysis_status" /></td>
    <td><code>string</code></td>
    <td>The status of analysis, if the application component has source code or an associated database. (ANALYSIS_TO_BE_SCHEDULED, ANALYSIS_STARTED, ANALYSIS_SUCCESS, ANALYSIS_FAILED, ANALYSIS_PARTIAL_SUCCESS, UNCONFIGURED, CONFIGURED)</td>
</tr>
<tr>
    <td><CopyableCode code="antipattern_report_s3_object" /></td>
    <td><code>object</code></td>
    <td>The S3 bucket name and the Amazon S3 key name for the anti-pattern report.</td>
</tr>
<tr>
    <td><CopyableCode code="antipattern_report_status" /></td>
    <td><code>string</code></td>
    <td>The status of the anti-pattern report generation. (FAILED, IN_PROGRESS, SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="antipattern_report_status_message" /></td>
    <td><code>string</code></td>
    <td>The status message for the anti-pattern. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="app_type" /></td>
    <td><code>string</code></td>
    <td>The type of application component. (DotNetFramework, Java, SQLServer, IIS, Oracle, Other, Tomcat, JBoss, Spring, Mongo DB, DB2, Maria DB, MySQL, Sybase, PostgreSQLServer, Cassandra, IBM WebSphere, Oracle WebLogic, Visual Basic, Unknown, DotnetCore, Dotnet)</td>
</tr>
<tr>
    <td><CopyableCode code="app_unit_error" /></td>
    <td><code>object</code></td>
    <td>The error in the analysis of the source code or database.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_server_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the server that the application component is running on. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="database_config_detail" /></td>
    <td><code>object</code></td>
    <td>Configuration details for the database associated with the application component.</td>
</tr>
<tr>
    <td><CopyableCode code="inclusion_status" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the application component has been included for server recommendation or not. (excludeFromAssessment, includeInAssessment)</td>
</tr>
<tr>
    <td><CopyableCode code="last_analyzed_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the application component was assessed.</td>
</tr>
<tr>
    <td><CopyableCode code="list_antipattern_severity_summary" /></td>
    <td><code>array</code></td>
    <td>A list of anti-pattern severity summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="more_server_association_exists" /></td>
    <td><code>boolean</code></td>
    <td>Set to true if the application component is running on multiple servers.</td>
</tr>
<tr>
    <td><CopyableCode code="os_driver" /></td>
    <td><code>string</code></td>
    <td>OS driver. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="os_version" /></td>
    <td><code>string</code></td>
    <td>OS version. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_set" /></td>
    <td><code>object</code></td>
    <td>The top recommendation set for the application component.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_sub_type" /></td>
    <td><code>string</code></td>
    <td>The application component subtype. (Database, Process, DatabaseProcess)</td>
</tr>
<tr>
    <td><CopyableCode code="result_list" /></td>
    <td><code>array</code></td>
    <td>A list of the analysis results.</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_status" /></td>
    <td><code>string</code></td>
    <td>The status of the application unit. (ANALYSIS_TO_BE_SCHEDULED, ANALYSIS_STARTED, ANALYSIS_SUCCESS, ANALYSIS_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_status_message" /></td>
    <td><code>string</code></td>
    <td>The status message for the application unit. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_code_repositories" /></td>
    <td><code>array</code></td>
    <td>Details about the source code repository associated with the application component.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the analysis status and any failure message. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#list_application_components"><CopyableCode code="list_application_components" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of all the application components (processes).</td>
</tr>
<tr>
    <td><a href="#update_application_component_config"><CopyableCode code="update_application_component_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationComponentId"><code>applicationComponentId</code></a></td>
    <td></td>
    <td>Updates the configuration of an application component.</td>
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
    defaultValue="list_application_components"
    values={[
        { label: 'list_application_components', value: 'list_application_components' }
    ]}
>
<TabItem value="list_application_components">

Retrieves a list of all the application components (processes).

```sql
SELECT
id,
name,
analysis_status,
antipattern_report_s3_object,
antipattern_report_status,
antipattern_report_status_message,
app_type,
app_unit_error,
associated_server_id,
database_config_detail,
inclusion_status,
last_analyzed_timestamp,
list_antipattern_severity_summary,
more_server_association_exists,
os_driver,
os_version,
recommendation_set,
resource_sub_type,
result_list,
runtime_status,
runtime_status_message,
source_code_repositories,
status_message
FROM aws.migrationhubstrategy.application_components
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_application_component_config"
    values={[
        { label: 'update_application_component_config', value: 'update_application_component_config' }
    ]}
>
<TabItem value="update_application_component_config">

Updates the configuration of an application component.

```sql
UPDATE aws.migrationhubstrategy.application_components
SET 
appType = '{{ appType }}',
applicationComponentId = '{{ applicationComponentId }}',
configureOnly = {{ configureOnly }},
inclusionStatus = '{{ inclusionStatus }}',
secretsManagerKey = '{{ secretsManagerKey }}',
sourceCodeList = '{{ sourceCodeList }}',
strategyOption = '{{ strategyOption }}'
WHERE 
region = '{{ region }}' --required
AND applicationComponentId = '{{ applicationComponentId }}' --required;
```
</TabItem>
</Tabs>
