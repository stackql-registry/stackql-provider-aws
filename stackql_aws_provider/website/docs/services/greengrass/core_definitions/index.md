--- 
title: core_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - core_definitions
  - greengrass
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

Creates, updates, deletes, gets or lists a <code>core_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="core_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrass.core_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_core_definition"
    values={[
        { label: 'get_core_definition', value: 'get_core_definition' },
        { label: 'list_core_definitions', value: 'list_core_definitions' }
    ]}
>
<TabItem value="get_core_definition">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the definition was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_version" /></td>
    <td><code>string</code></td>
    <td>The ID of the latest version associated with the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_version_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the latest version associated with the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tag(s) attached to the resource arn.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_core_definitions">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the definition was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_version" /></td>
    <td><code>string</code></td>
    <td>The ID of the latest version associated with the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_version_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the latest version associated with the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tag(s) attached to the resource arn.</td>
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
    <td><a href="#get_core_definition"><CopyableCode code="get_core_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-core_definition_id"><code>core_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a core definition version.</td>
</tr>
<tr>
    <td><a href="#list_core_definitions"><CopyableCode code="list_core_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Retrieves a list of core definitions.</td>
</tr>
<tr>
    <td><a href="#create_core_definition"><CopyableCode code="create_core_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Client-Token"><code>X-Amzn-Client-Token</code></a></td>
    <td>Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.</td>
</tr>
<tr>
    <td><a href="#update_core_definition"><CopyableCode code="update_core_definition" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-core_definition_id"><code>core_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a core definition.</td>
</tr>
<tr>
    <td><a href="#delete_core_definition"><CopyableCode code="delete_core_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-core_definition_id"><code>core_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a core definition.</td>
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
<tr id="parameter-core_definition_id">
    <td><CopyableCode code="core_definition_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the core definition.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>string</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or ''null'' if there are no additional results.</td>
</tr>
<tr id="parameter-X-Amzn-Client-Token">
    <td><CopyableCode code="X-Amzn-Client-Token" /></td>
    <td><code>string</code></td>
    <td>A client token used to correlate requests and responses.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_core_definition"
    values={[
        { label: 'get_core_definition', value: 'get_core_definition' },
        { label: 'list_core_definitions', value: 'list_core_definitions' }
    ]}
>
<TabItem value="get_core_definition">

Retrieves information about a core definition version.

```sql
SELECT
arn,
creation_timestamp,
id,
last_updated_timestamp,
latest_version,
latest_version_arn,
name,
tags
FROM aws.greengrass.core_definitions
WHERE core_definition_id = '{{ core_definition_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_core_definitions">

Retrieves a list of core definitions.

```sql
SELECT
arn,
creation_timestamp,
id,
last_updated_timestamp,
latest_version,
latest_version_arn,
name,
tags
FROM aws.greengrass.core_definitions
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_core_definition"
    values={[
        { label: 'create_core_definition', value: 'create_core_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_core_definition">

Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.

```sql
INSERT INTO aws.greengrass.core_definitions (
InitialVersion,
Name,
tags,
region,
`X-Amzn-Client-Token`
)
SELECT 
'{{ InitialVersion }}',
'{{ Name }}',
'{{ tags }}',
'{{ region }}',
'{{ X-Amzn-Client-Token }}'
RETURNING
arn,
creation_timestamp,
id,
last_updated_timestamp,
latest_version,
latest_version_arn,
name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: core_definitions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the core_definitions resource.
    - name: InitialVersion
      description: |
        Information about a core definition version.
      value:
        Cores:
          - CertificateArn: "{{ CertificateArn }}"
            Id: "{{ Id }}"
            SyncShadow: {{ SyncShadow }}
            ThingArn: "{{ ThingArn }}"
    - name: Name
      value: "{{ Name }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        The key-value pair for the resource tag.
    - name: X-Amzn-Client-Token
      value: "{{ X-Amzn-Client-Token }}"
      description: A client token used to correlate requests and responses.
      description: A client token used to correlate requests and responses.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_core_definition"
    values={[
        { label: 'update_core_definition', value: 'update_core_definition' }
    ]}
>
<TabItem value="update_core_definition">

Updates a core definition.

```sql
UPDATE aws.greengrass.core_definitions
SET 
Name = '{{ Name }}'
WHERE 
core_definition_id = '{{ core_definition_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_core_definition"
    values={[
        { label: 'delete_core_definition', value: 'delete_core_definition' }
    ]}
>
<TabItem value="delete_core_definition">

Deletes a core definition.

```sql
DELETE FROM aws.greengrass.core_definitions
WHERE core_definition_id = '{{ core_definition_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
