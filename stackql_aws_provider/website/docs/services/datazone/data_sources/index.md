--- 
title: data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources
  - datazone
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

Creates, updates, deletes, gets or lists a <code>data_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.data_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_data_sources"
    values={[
        { label: 'list_data_sources', value: 'list_data_sources' },
        { label: 'get_data_source', value: 'get_data_source' }
    ]}
>
<TabItem value="list_data_sources">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_id" /></td>
    <td><code>string</code></td>
    <td>The connection ID that's part of the data source summary.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data source was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data source. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The data source description.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which the data source exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enable_setting" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the data source is enabled. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment in which the data source exists.</td>
</tr>
<tr>
    <td><CopyableCode code="last_run_asset_count" /></td>
    <td><code>integer</code></td>
    <td>The count of the assets created during the last data source run.</td>
</tr>
<tr>
    <td><CopyableCode code="last_run_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data source run was last performed.</td>
</tr>
<tr>
    <td><CopyableCode code="last_run_error_message" /></td>
    <td><code>object</code></td>
    <td>The details of the error message that is returned if the operation cannot be successfully completed.</td>
</tr>
<tr>
    <td><CopyableCode code="last_run_status" /></td>
    <td><code>string</code></td>
    <td>The status of the last data source run. (REQUESTED, RUNNING, FAILED, PARTIALLY_SUCCEEDED, SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>The details of the schedule of the data source runs.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the data source. (CREATING, FAILED_CREATION, READY, UPDATING, FAILED_UPDATE, RUNNING, DELETING, FAILED_DELETION)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data source was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_data_source">

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
    <td>The ID of the data source. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_forms_output" /></td>
    <td><code>array</code></td>
    <td>The metadata forms attached to the assets created by this data source.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration of the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data source was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which the data source exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enable_setting" /></td>
    <td><code>string</code></td>
    <td>Specifies whether this data source is enabled or not. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment where this data source creates and publishes assets, (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>object</code></td>
    <td>The details of the error message that is returned if the operation cannot be successfully completed.</td>
</tr>
<tr>
    <td><CopyableCode code="last_run_asset_count" /></td>
    <td><code>integer</code></td>
    <td>The number of assets created by the data source during its last run.</td>
</tr>
<tr>
    <td><CopyableCode code="last_run_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last run of the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="last_run_error_message" /></td>
    <td><code>object</code></td>
    <td>The details of the error message that is returned if the operation cannot be successfully completed.</td>
</tr>
<tr>
    <td><CopyableCode code="last_run_status" /></td>
    <td><code>string</code></td>
    <td>The status of the last run of the data source. (REQUESTED, RUNNING, FAILED, PARTIALLY_SUCCEEDED, SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the project where the data source creates and publishes assets. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="publish_on_import" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation" /></td>
    <td><code>object</code></td>
    <td>The recommendation to be updated as part of the UpdateDataSource action.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>The details of the schedule of the data source runs.</td>
</tr>
<tr>
    <td><CopyableCode code="self_grant_status" /></td>
    <td><code>object</code></td>
    <td>Specifies the status of the self-granting functionality.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the data source. (CREATING, FAILED_CREATION, READY, UPDATING, FAILED_UPDATE, RUNNING, DELETING, FAILED_DELETION)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data source was updated.</td>
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
    <td><a href="#list_data_sources"><CopyableCode code="list_data_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-projectIdentifier"><code>projectIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-environmentIdentifier"><code>environmentIdentifier</code></a>, <a href="#parameter-connectionIdentifier"><code>connectionIdentifier</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists data sources in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#get_data_source"><CopyableCode code="get_data_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Amazon DataZone data source.</td>
</tr>
<tr>
    <td><a href="#create_data_source"><CopyableCode code="create_data_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-projectIdentifier"><code>projectIdentifier</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Creates an Amazon DataZone data source.</td>
</tr>
<tr>
    <td><a href="#update_data_source"><CopyableCode code="update_data_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified data source in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#delete_data_source"><CopyableCode code="delete_data_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-retainPermissionsOnRevokeFailure"><code>retainPermissionsOnRevokeFailure</code></a></td>
    <td>Deletes a data source in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#start_data_source_run"><CopyableCode code="start_data_source_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-data_source_identifier"><code>data_source_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Start the run of the specified data source in Amazon DataZone.</td>
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
<tr id="parameter-data_source_identifier">
    <td><CopyableCode code="data_source_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the data source.</td>
</tr>
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone domain in which to start a data source run.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the data source that is deleted.</td>
</tr>
<tr id="parameter-projectIdentifier">
    <td><CopyableCode code="projectIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the project in which to list data sources.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</td>
</tr>
<tr id="parameter-connectionIdentifier">
    <td><CopyableCode code="connectionIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the connection.</td>
</tr>
<tr id="parameter-environmentIdentifier">
    <td><CopyableCode code="environmentIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the environment in which to list the data sources.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of data sources to return in a single call to ListDataSources. When the number of data sources to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListDataSources to list the next set of data sources.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the data source.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of data sources is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of data sources, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDataSources to list the next set of data sources.</td>
</tr>
<tr id="parameter-retainPermissionsOnRevokeFailure">
    <td><CopyableCode code="retainPermissionsOnRevokeFailure" /></td>
    <td><code>boolean</code></td>
    <td>Specifies that the granted permissions are retained in case of a self-subscribe functionality failure for a data source.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the data source.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the data source.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_data_sources"
    values={[
        { label: 'list_data_sources', value: 'list_data_sources' },
        { label: 'get_data_source', value: 'get_data_source' }
    ]}
>
<TabItem value="list_data_sources">

Lists data sources in Amazon DataZone.

```sql
SELECT
name,
connection_id,
created_at,
data_source_id,
description,
domain_id,
enable_setting,
environment_id,
last_run_asset_count,
last_run_at,
last_run_error_message,
last_run_status,
schedule,
status,
type_,
updated_at
FROM aws.datazone.data_sources
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND projectIdentifier = '{{ projectIdentifier }}' -- required
AND region = '{{ region }}' -- required
AND environmentIdentifier = '{{ environmentIdentifier }}'
AND connectionIdentifier = '{{ connectionIdentifier }}'
AND type = '{{ type }}'
AND status = '{{ status }}'
AND name = '{{ name }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="get_data_source">

Gets an Amazon DataZone data source.

```sql
SELECT
id,
name,
asset_forms_output,
configuration,
connection_id,
created_at,
description,
domain_id,
enable_setting,
environment_id,
error_message,
last_run_asset_count,
last_run_at,
last_run_error_message,
last_run_status,
project_id,
publish_on_import,
recommendation,
schedule,
self_grant_status,
status,
type_,
updated_at
FROM aws.datazone.data_sources
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_source"
    values={[
        { label: 'create_data_source', value: 'create_data_source' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_source">

Creates an Amazon DataZone data source.

```sql
INSERT INTO aws.datazone.data_sources (
name,
description,
projectIdentifier,
environmentIdentifier,
connectionIdentifier,
type,
configuration,
recommendation,
enableSetting,
schedule,
publishOnImport,
assetFormsInput,
clientToken,
domain_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ projectIdentifier }}' /* required */,
'{{ environmentIdentifier }}',
'{{ connectionIdentifier }}',
'{{ type }}' /* required */,
'{{ configuration }}',
'{{ recommendation }}',
'{{ enableSetting }}',
'{{ schedule }}',
{{ publishOnImport }},
'{{ assetFormsInput }}',
'{{ clientToken }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
id,
name,
asset_forms_output,
configuration,
connection_id,
created_at,
description,
domain_id,
enable_setting,
environment_id,
error_message,
last_run_at,
last_run_error_message,
last_run_status,
project_id,
publish_on_import,
recommendation,
schedule,
status,
type_,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_sources
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the data_sources resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_sources resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: projectIdentifier
      value: "{{ projectIdentifier }}"
    - name: environmentIdentifier
      value: "{{ environmentIdentifier }}"
    - name: connectionIdentifier
      value: "{{ connectionIdentifier }}"
    - name: type
      value: "{{ type }}"
    - name: configuration
      description: |
        The configuration of the data source.
      value:
        glueRunConfiguration:
          dataAccessRole: "{{ dataAccessRole }}"
          relationalFilterConfigurations:
            - databaseName: "{{ databaseName }}"
              schemaName: "{{ schemaName }}"
              filterExpressions: "{{ filterExpressions }}"
          autoImportDataQualityResult: {{ autoImportDataQualityResult }}
          catalogName: "{{ catalogName }}"
        redshiftRunConfiguration:
          dataAccessRole: "{{ dataAccessRole }}"
          relationalFilterConfigurations:
            - databaseName: "{{ databaseName }}"
              schemaName: "{{ schemaName }}"
              filterExpressions: "{{ filterExpressions }}"
          redshiftCredentialConfiguration:
            secretManagerArn: "{{ secretManagerArn }}"
          redshiftStorage:
            redshiftClusterSource:
              clusterName: "{{ clusterName }}"
            redshiftServerlessSource:
              workgroupName: "{{ workgroupName }}"
        sageMakerRunConfiguration:
          trackingAssets: "{{ trackingAssets }}"
    - name: recommendation
      description: |
        The recommendation to be updated as part of the UpdateDataSource action.
      value:
        enableBusinessNameGeneration: {{ enableBusinessNameGeneration }}
    - name: enableSetting
      value: "{{ enableSetting }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: schedule
      description: |
        The details of the schedule of the data source runs.
      value:
        timezone: "{{ timezone }}"
        schedule: "{{ schedule }}"
    - name: publishOnImport
      value: {{ publishOnImport }}
    - name: assetFormsInput
      value:
        - formName: "{{ formName }}"
          typeIdentifier: "{{ typeIdentifier }}"
          typeRevision: "{{ typeRevision }}"
          content: "{{ content }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_source"
    values={[
        { label: 'update_data_source', value: 'update_data_source' }
    ]}
>
<TabItem value="update_data_source">

Updates the specified data source in Amazon DataZone.

```sql
UPDATE aws.datazone.data_sources
SET 
name = '{{ name }}',
description = '{{ description }}',
enableSetting = '{{ enableSetting }}',
publishOnImport = {{ publishOnImport }},
assetFormsInput = '{{ assetFormsInput }}',
schedule = '{{ schedule }}',
configuration = '{{ configuration }}',
recommendation = '{{ recommendation }}',
retainPermissionsOnRevokeFailure = {{ retainPermissionsOnRevokeFailure }}
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
asset_forms_output,
configuration,
connection_id,
created_at,
description,
domain_id,
enable_setting,
environment_id,
error_message,
last_run_at,
last_run_error_message,
last_run_status,
project_id,
publish_on_import,
recommendation,
retain_permissions_on_revoke_failure,
schedule,
self_grant_status,
status,
type_,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_source"
    values={[
        { label: 'delete_data_source', value: 'delete_data_source' }
    ]}
>
<TabItem value="delete_data_source">

Deletes a data source in Amazon DataZone.

```sql
DELETE FROM aws.datazone.data_sources
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
AND retainPermissionsOnRevokeFailure = '{{ retainPermissionsOnRevokeFailure }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_data_source_run"
    values={[
        { label: 'start_data_source_run', value: 'start_data_source_run' }
    ]}
>
<TabItem value="start_data_source_run">

Start the run of the specified data source in Amazon DataZone.

```sql
EXEC aws.datazone.data_sources.start_data_source_run 
@domain_identifier='{{ domain_identifier }}' --required, 
@data_source_identifier='{{ data_source_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
