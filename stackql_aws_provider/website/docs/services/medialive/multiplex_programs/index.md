--- 
title: multiplex_programs
hide_title: false
hide_table_of_contents: false
keywords:
  - multiplex_programs
  - medialive
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

Creates, updates, deletes, gets or lists a <code>multiplex_programs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multiplex_programs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.multiplex_programs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_multiplex_program"
    values={[
        { label: 'describe_multiplex_program', value: 'describe_multiplex_program' },
        { label: 'list_multiplex_programs', value: 'list_multiplex_programs' }
    ]}
>
<TabItem value="describe_multiplex_program">

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
    <td><CopyableCode code="channel_id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="multiplex_program_settings" /></td>
    <td><code>object</code></td>
    <td>Multiplex Program settings configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="packet_identifiers_map" /></td>
    <td><code>object</code></td>
    <td>The packet identifier map for this multiplex program.</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_details" /></td>
    <td><code>array</code></td>
    <td>Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.</td>
</tr>
<tr>
    <td><CopyableCode code="program_name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_multiplex_programs">

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
    <td><CopyableCode code="channel_id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="program_name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
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
    <td><a href="#describe_multiplex_program"><CopyableCode code="describe_multiplex_program" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-multiplex_id"><code>multiplex_id</code></a>, <a href="#parameter-program_name"><code>program_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the details for a program in a multiplex.</td>
</tr>
<tr>
    <td><a href="#list_multiplex_programs"><CopyableCode code="list_multiplex_programs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-multiplex_id"><code>multiplex_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List the programs that currently exist for a specific multiplex.</td>
</tr>
<tr>
    <td><a href="#create_multiplex_program"><CopyableCode code="create_multiplex_program" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-multiplex_id"><code>multiplex_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MultiplexProgramSettings"><code>MultiplexProgramSettings</code></a>, <a href="#parameter-ProgramName"><code>ProgramName</code></a>, <a href="#parameter-RequestId"><code>RequestId</code></a></td>
    <td></td>
    <td>Create a new program in the multiplex.</td>
</tr>
<tr>
    <td><a href="#update_multiplex_program"><CopyableCode code="update_multiplex_program" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-multiplex_id"><code>multiplex_id</code></a>, <a href="#parameter-program_name"><code>program_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update a program in a multiplex.</td>
</tr>
<tr>
    <td><a href="#delete_multiplex_program"><CopyableCode code="delete_multiplex_program" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-multiplex_id"><code>multiplex_id</code></a>, <a href="#parameter-program_name"><code>program_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a program from a multiplex.</td>
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
<tr id="parameter-multiplex_id">
    <td><CopyableCode code="multiplex_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the multiplex that the program belongs to.</td>
</tr>
<tr id="parameter-program_name">
    <td><CopyableCode code="program_name" /></td>
    <td><code>string</code></td>
    <td>The multiplex program name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_multiplex_program"
    values={[
        { label: 'describe_multiplex_program', value: 'describe_multiplex_program' },
        { label: 'list_multiplex_programs', value: 'list_multiplex_programs' }
    ]}
>
<TabItem value="describe_multiplex_program">

Get the details for a program in a multiplex.

```sql
SELECT
channel_id,
multiplex_program_settings,
packet_identifiers_map,
pipeline_details,
program_name
FROM aws.medialive.multiplex_programs
WHERE multiplex_id = '{{ multiplex_id }}' -- required
AND program_name = '{{ program_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_multiplex_programs">

List the programs that currently exist for a specific multiplex.

```sql
SELECT
channel_id,
program_name
FROM aws.medialive.multiplex_programs
WHERE multiplex_id = '{{ multiplex_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_multiplex_program"
    values={[
        { label: 'create_multiplex_program', value: 'create_multiplex_program' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_multiplex_program">

Create a new program in the multiplex.

```sql
INSERT INTO aws.medialive.multiplex_programs (
MultiplexProgramSettings,
ProgramName,
RequestId,
multiplex_id,
region
)
SELECT 
'{{ MultiplexProgramSettings }}' /* required */,
'{{ ProgramName }}' /* required */,
'{{ RequestId }}' /* required */,
'{{ multiplex_id }}',
'{{ region }}'
RETURNING
multiplex_program
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: multiplex_programs
  props:
    - name: multiplex_id
      value: "{{ multiplex_id }}"
      description: Required parameter for the multiplex_programs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the multiplex_programs resource.
    - name: MultiplexProgramSettings
      description: |
        Multiplex Program settings configuration.
      value:
        PreferredChannelPipeline: "{{ PreferredChannelPipeline }}"
        ProgramNumber: {{ ProgramNumber }}
        ServiceDescriptor:
          ProviderName: "{{ ProviderName }}"
          ServiceName: "{{ ServiceName }}"
        VideoSettings:
          ConstantBitrate: {{ ConstantBitrate }}
          StatmuxSettings:
            MaximumBitrate: {{ MaximumBitrate }}
            MinimumBitrate: {{ MinimumBitrate }}
            Priority: {{ Priority }}
    - name: ProgramName
      value: "{{ ProgramName }}"
      description: |
        Placeholder documentation for __string
    - name: RequestId
      value: "{{ RequestId }}"
      description: |
        Placeholder documentation for __string
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_multiplex_program"
    values={[
        { label: 'update_multiplex_program', value: 'update_multiplex_program' }
    ]}
>
<TabItem value="update_multiplex_program">

Update a program in a multiplex.

```sql
UPDATE aws.medialive.multiplex_programs
SET 
MultiplexProgramSettings = '{{ MultiplexProgramSettings }}'
WHERE 
multiplex_id = '{{ multiplex_id }}' --required
AND program_name = '{{ program_name }}' --required
AND region = '{{ region }}' --required
RETURNING
multiplex_program;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_multiplex_program"
    values={[
        { label: 'delete_multiplex_program', value: 'delete_multiplex_program' }
    ]}
>
<TabItem value="delete_multiplex_program">

Delete a program from a multiplex.

```sql
DELETE FROM aws.medialive.multiplex_programs
WHERE multiplex_id = '{{ multiplex_id }}' --required
AND program_name = '{{ program_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
