--- 
title: extraction_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - extraction_definitions
  - connect
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

Creates, updates, deletes, gets or lists an <code>extraction_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="extraction_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.extraction_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_extraction_definition"
    values={[
        { label: 'describe_extraction_definition', value: 'describe_extraction_definition' },
        { label: 'list_extraction_definitions', value: 'list_extraction_definitions' }
    ]}
>
<TabItem value="describe_extraction_definition">

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
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the extraction definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="display" /></td>
    <td><code>object</code></td>
    <td>The display configuration for an extraction definition.</td>
</tr>
<tr>
    <td><CopyableCode code="extraction_configuration" /></td>
    <td><code>object</code></td>
    <td>The extraction configuration that defines how data is extracted from customer interactions.</td>
</tr>
<tr>
    <td><CopyableCode code="extraction_definition_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the extraction definition.</td>
</tr>
<tr>
    <td><CopyableCode code="extraction_definition_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the extraction definition.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last updated the extraction definition.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the extraction definition was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the extraction definition.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_extraction_definitions">

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
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the extraction definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="extraction_definition_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the extraction definition.</td>
</tr>
<tr>
    <td><CopyableCode code="extraction_definition_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the extraction definition.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last updated the extraction definition.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the extraction definition was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the extraction definition.</td>
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
    <td><a href="#describe_extraction_definition"><CopyableCode code="describe_extraction_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-extraction_definition_id"><code>extraction_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an extraction definition in the specified Connect Customer instance.</td>
</tr>
<tr>
    <td><a href="#list_extraction_definitions"><CopyableCode code="list_extraction_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists extraction definitions in the specified Connect Customer instance.</td>
</tr>
<tr>
    <td><a href="#create_extraction_definition"><CopyableCode code="create_extraction_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExtractionConfiguration"><code>ExtractionConfiguration</code></a></td>
    <td></td>
    <td>Creates an extraction definition in the specified Connect Customer instance. An extraction definition specifies how structured data is extracted from customer interactions using generative AI, including the prompt hint that guides extraction and the behavior when a value cannot be found.</td>
</tr>
<tr>
    <td><a href="#update_extraction_definition"><CopyableCode code="update_extraction_definition" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-extraction_definition_id"><code>extraction_definition_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExtractionConfiguration"><code>ExtractionConfiguration</code></a></td>
    <td></td>
    <td>Updates an extraction definition in the specified Connect Customer instance.</td>
</tr>
<tr>
    <td><a href="#delete_extraction_definition"><CopyableCode code="delete_extraction_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-extraction_definition_id"><code>extraction_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an extraction definition from the specified Connect Customer instance.</td>
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
<tr id="parameter-extraction_definition_id">
    <td><CopyableCode code="extraction_definition_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the extraction definition to delete.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. The default MaxResult size is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_extraction_definition"
    values={[
        { label: 'describe_extraction_definition', value: 'describe_extraction_definition' },
        { label: 'list_extraction_definitions', value: 'list_extraction_definitions' }
    ]}
>
<TabItem value="describe_extraction_definition">

Describes an extraction definition in the specified Connect Customer instance.

```sql
SELECT
created_time,
display,
extraction_configuration,
extraction_definition_arn,
extraction_definition_id,
last_updated_by,
last_updated_time,
name,
tags
FROM aws.connect.extraction_definitions
WHERE instance_id = '{{ instance_id }}' -- required
AND extraction_definition_id = '{{ extraction_definition_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_extraction_definitions">

Lists extraction definitions in the specified Connect Customer instance.

```sql
SELECT
created_time,
extraction_definition_arn,
extraction_definition_id,
last_updated_by,
last_updated_time,
name
FROM aws.connect.extraction_definitions
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_extraction_definition"
    values={[
        { label: 'create_extraction_definition', value: 'create_extraction_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_extraction_definition">

Creates an extraction definition in the specified Connect Customer instance. An extraction definition specifies how structured data is extracted from customer interactions using generative AI, including the prompt hint that guides extraction and the behavior when a value cannot be found.

```sql
INSERT INTO aws.connect.extraction_definitions (
ClientToken,
Name,
ExtractionConfiguration,
Display,
Tags,
instance_id,
region
)
SELECT 
'{{ ClientToken }}',
'{{ Name }}',
'{{ ExtractionConfiguration }}' /* required */,
'{{ Display }}',
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
extraction_definition_arn,
extraction_definition_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: extraction_definitions
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the extraction_definitions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the extraction_definitions resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Name
      value: "{{ Name }}"
    - name: ExtractionConfiguration
      description: |
        The extraction configuration that defines how data is extracted from customer interactions.
      value:
        PromptHint: "{{ PromptHint }}"
        NotFoundBehavior:
          Behavior: "{{ Behavior }}"
          DefaultValue: "{{ DefaultValue }}"
    - name: Display
      description: |
        The display configuration for an extraction definition.
      value:
        Label: "{{ Label }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_extraction_definition"
    values={[
        { label: 'update_extraction_definition', value: 'update_extraction_definition' }
    ]}
>
<TabItem value="update_extraction_definition">

Updates an extraction definition in the specified Connect Customer instance.

```sql
UPDATE aws.connect.extraction_definitions
SET 
ClientToken = '{{ ClientToken }}',
Name = '{{ Name }}',
ExtractionConfiguration = '{{ ExtractionConfiguration }}',
Display = '{{ Display }}'
WHERE 
extraction_definition_id = '{{ extraction_definition_id }}' --required
AND instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND ExtractionConfiguration = '{{ ExtractionConfiguration }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_extraction_definition"
    values={[
        { label: 'delete_extraction_definition', value: 'delete_extraction_definition' }
    ]}
>
<TabItem value="delete_extraction_definition">

Deletes an extraction definition from the specified Connect Customer instance.

```sql
DELETE FROM aws.connect.extraction_definitions
WHERE instance_id = '{{ instance_id }}' --required
AND extraction_definition_id = '{{ extraction_definition_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
