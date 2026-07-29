--- 
title: suite_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - suite_definitions
  - iotdeviceadvisor
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

Creates, updates, deletes, gets or lists a <code>suite_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="suite_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotdeviceadvisor.suite_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_suite_definition"
    values={[
        { label: 'get_suite_definition', value: 'get_suite_definition' },
        { label: 'list_suite_definitions', value: 'list_suite_definitions' }
    ]}
>
<TabItem value="get_suite_definition">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date (in Unix epoch time) when the suite definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date (in Unix epoch time) when the suite definition was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_version" /></td>
    <td><code>string</code></td>
    <td>Latest suite definition version of the suite definition.</td>
</tr>
<tr>
    <td><CopyableCode code="suite_definition_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the suite definition.</td>
</tr>
<tr>
    <td><CopyableCode code="suite_definition_configuration" /></td>
    <td><code>object</code></td>
    <td>Gets the suite definition configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="suite_definition_id" /></td>
    <td><code>string</code></td>
    <td>Suite definition ID of the suite definition.</td>
</tr>
<tr>
    <td><CopyableCode code="suite_definition_version" /></td>
    <td><code>string</code></td>
    <td>Suite definition version of the suite definition.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the suite definition.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_suite_definitions">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token used to get the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="suite_definition_information_list" /></td>
    <td><code>array</code></td>
    <td>An array of objects that provide summaries of information about the suite definitions in the list.</td>
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
    <td><a href="#get_suite_definition"><CopyableCode code="get_suite_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-suite_definition_id"><code>suite_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-suiteDefinitionVersion"><code>suiteDefinitionVersion</code></a></td>
    <td>Gets information about a Device Advisor test suite. Requires permission to access the GetSuiteDefinition action.</td>
</tr>
<tr>
    <td><a href="#list_suite_definitions"><CopyableCode code="list_suite_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the Device Advisor test suites you have created. Requires permission to access the ListSuiteDefinitions action.</td>
</tr>
<tr>
    <td><a href="#create_suite_definition"><CopyableCode code="create_suite_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-suiteDefinitionConfiguration"><code>suiteDefinitionConfiguration</code></a></td>
    <td></td>
    <td>Creates a Device Advisor test suite. Requires permission to access the CreateSuiteDefinition action.</td>
</tr>
<tr>
    <td><a href="#update_suite_definition"><CopyableCode code="update_suite_definition" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-suite_definition_id"><code>suite_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-suiteDefinitionConfiguration"><code>suiteDefinitionConfiguration</code></a></td>
    <td></td>
    <td>Updates a Device Advisor test suite. Requires permission to access the UpdateSuiteDefinition action.</td>
</tr>
<tr>
    <td><a href="#delete_suite_definition"><CopyableCode code="delete_suite_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-suite_definition_id"><code>suite_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Device Advisor test suite. Requires permission to access the DeleteSuiteDefinition action.</td>
</tr>
<tr>
    <td><a href="#start_suite_run"><CopyableCode code="start_suite_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-suite_definition_id"><code>suite_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-suiteRunConfiguration"><code>suiteRunConfiguration</code></a></td>
    <td></td>
    <td>Starts a Device Advisor test suite run. Requires permission to access the StartSuiteRun action.</td>
</tr>
<tr>
    <td><a href="#stop_suite_run"><CopyableCode code="stop_suite_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-suite_definition_id"><code>suite_definition_id</code></a>, <a href="#parameter-suite_run_id"><code>suite_run_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a Device Advisor test suite run that is currently running. Requires permission to access the StopSuiteRun action.</td>
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
<tr id="parameter-suite_definition_id">
    <td><CopyableCode code="suite_definition_id" /></td>
    <td><code>string</code></td>
    <td>Suite definition ID of the test suite run to be stopped.</td>
</tr>
<tr id="parameter-suite_run_id">
    <td><CopyableCode code="suite_run_id" /></td>
    <td><code>string</code></td>
    <td>Suite run ID of the test suite run to be stopped.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at once.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used to get the next set of results.</td>
</tr>
<tr id="parameter-suiteDefinitionVersion">
    <td><CopyableCode code="suiteDefinitionVersion" /></td>
    <td><code>string</code></td>
    <td>Suite definition version of the test suite to get.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_suite_definition"
    values={[
        { label: 'get_suite_definition', value: 'get_suite_definition' },
        { label: 'list_suite_definitions', value: 'list_suite_definitions' }
    ]}
>
<TabItem value="get_suite_definition">

Gets information about a Device Advisor test suite. Requires permission to access the GetSuiteDefinition action.

```sql
SELECT
created_at,
last_modified_at,
latest_version,
suite_definition_arn,
suite_definition_configuration,
suite_definition_id,
suite_definition_version,
tags
FROM aws.iotdeviceadvisor.suite_definitions
WHERE suite_definition_id = '{{ suite_definition_id }}' -- required
AND region = '{{ region }}' -- required
AND suiteDefinitionVersion = '{{ suiteDefinitionVersion }}'
;
```
</TabItem>
<TabItem value="list_suite_definitions">

Lists the Device Advisor test suites you have created. Requires permission to access the ListSuiteDefinitions action.

```sql
SELECT
next_token,
suite_definition_information_list
FROM aws.iotdeviceadvisor.suite_definitions
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_suite_definition"
    values={[
        { label: 'create_suite_definition', value: 'create_suite_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_suite_definition">

Creates a Device Advisor test suite. Requires permission to access the CreateSuiteDefinition action.

```sql
INSERT INTO aws.iotdeviceadvisor.suite_definitions (
suiteDefinitionConfiguration,
tags,
clientToken,
region
)
SELECT 
'{{ suiteDefinitionConfiguration }}' /* required */,
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
created_at,
suite_definition_arn,
suite_definition_id,
suite_definition_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: suite_definitions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the suite_definitions resource.
    - name: suiteDefinitionConfiguration
      description: |
        Gets the suite definition configuration.
      value:
        suiteDefinitionName: "{{ suiteDefinitionName }}"
        devices:
          - thingArn: "{{ thingArn }}"
            certificateArn: "{{ certificateArn }}"
            deviceRoleArn: "{{ deviceRoleArn }}"
        intendedForQualification: {{ intendedForQualification }}
        isLongDurationTest: {{ isLongDurationTest }}
        rootGroup: "{{ rootGroup }}"
        devicePermissionRoleArn: "{{ devicePermissionRoleArn }}"
        protocol: "{{ protocol }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_suite_definition"
    values={[
        { label: 'update_suite_definition', value: 'update_suite_definition' }
    ]}
>
<TabItem value="update_suite_definition">

Updates a Device Advisor test suite. Requires permission to access the UpdateSuiteDefinition action.

```sql
UPDATE aws.iotdeviceadvisor.suite_definitions
SET 
suiteDefinitionConfiguration = '{{ suiteDefinitionConfiguration }}'
WHERE 
suite_definition_id = '{{ suite_definition_id }}' --required
AND region = '{{ region }}' --required
AND suiteDefinitionConfiguration = '{{ suiteDefinitionConfiguration }}' --required
RETURNING
created_at,
last_updated_at,
suite_definition_arn,
suite_definition_id,
suite_definition_name,
suite_definition_version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_suite_definition"
    values={[
        { label: 'delete_suite_definition', value: 'delete_suite_definition' }
    ]}
>
<TabItem value="delete_suite_definition">

Deletes a Device Advisor test suite. Requires permission to access the DeleteSuiteDefinition action.

```sql
DELETE FROM aws.iotdeviceadvisor.suite_definitions
WHERE suite_definition_id = '{{ suite_definition_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_suite_run"
    values={[
        { label: 'start_suite_run', value: 'start_suite_run' },
        { label: 'stop_suite_run', value: 'stop_suite_run' }
    ]}
>
<TabItem value="start_suite_run">

Starts a Device Advisor test suite run. Requires permission to access the StartSuiteRun action.

```sql
EXEC aws.iotdeviceadvisor.suite_definitions.start_suite_run 
@suite_definition_id='{{ suite_definition_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"suiteDefinitionVersion": "{{ suiteDefinitionVersion }}", 
"suiteRunConfiguration": "{{ suiteRunConfiguration }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
<TabItem value="stop_suite_run">

Stops a Device Advisor test suite run that is currently running. Requires permission to access the StopSuiteRun action.

```sql
EXEC aws.iotdeviceadvisor.suite_definitions.stop_suite_run 
@suite_definition_id='{{ suite_definition_id }}' --required, 
@suite_run_id='{{ suite_run_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
