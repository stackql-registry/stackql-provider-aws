--- 
title: function_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - function_definitions
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

Creates, updates, deletes, gets or lists a <code>function_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="function_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrass.function_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_function_definition"
    values={[
        { label: 'get_function_definition', value: 'get_function_definition' },
        { label: 'list_function_definitions', value: 'list_function_definitions' }
    ]}
>
<TabItem value="get_function_definition">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTimestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the definition was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestVersion" /></td>
    <td><code>string</code></td>
    <td>The ID of the latest version associated with the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestVersionArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the latest version associated with the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
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
<TabItem value="list_function_definitions">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTimestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the definition was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestVersion" /></td>
    <td><code>string</code></td>
    <td>The ID of the latest version associated with the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestVersionArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the latest version associated with the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
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
    <td><a href="#get_function_definition"><CopyableCode code="get_function_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_definition_id"><code>function_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a Lambda function definition, including its creation time and latest version.</td>
</tr>
<tr>
    <td><a href="#list_function_definitions"><CopyableCode code="list_function_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Retrieves a list of Lambda function definitions.</td>
</tr>
<tr>
    <td><a href="#create_function_definition"><CopyableCode code="create_function_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Client-Token"><code>X-Amzn-Client-Token</code></a></td>
    <td>Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.</td>
</tr>
<tr>
    <td><a href="#update_function_definition"><CopyableCode code="update_function_definition" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-function_definition_id"><code>function_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a Lambda function definition.</td>
</tr>
<tr>
    <td><a href="#delete_function_definition"><CopyableCode code="delete_function_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-function_definition_id"><code>function_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Lambda function definition.</td>
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
<tr id="parameter-function_definition_id">
    <td><CopyableCode code="function_definition_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Lambda function definition.</td>
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
    defaultValue="get_function_definition"
    values={[
        { label: 'get_function_definition', value: 'get_function_definition' },
        { label: 'list_function_definitions', value: 'list_function_definitions' }
    ]}
>
<TabItem value="get_function_definition">

Retrieves information about a Lambda function definition, including its creation time and latest version.

```sql
SELECT
Arn,
CreationTimestamp,
Id,
LastUpdatedTimestamp,
LatestVersion,
LatestVersionArn,
Name,
tags
FROM aws.greengrass.function_definitions
WHERE function_definition_id = '{{ function_definition_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_function_definitions">

Retrieves a list of Lambda function definitions.

```sql
SELECT
Arn,
CreationTimestamp,
Id,
LastUpdatedTimestamp,
LatestVersion,
LatestVersionArn,
Name,
Tags
FROM aws.greengrass.function_definitions
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_function_definition"
    values={[
        { label: 'create_function_definition', value: 'create_function_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_function_definition">

Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.

```sql
INSERT INTO aws.greengrass.function_definitions (
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
Arn,
CreationTimestamp,
Id,
LastUpdatedTimestamp,
LatestVersion,
LatestVersionArn,
Name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: function_definitions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the function_definitions resource.
    - name: InitialVersion
      description: |
        Information about a function definition version.
      value:
        DefaultConfig:
          Execution:
            IsolationMode: "{{ IsolationMode }}"
            RunAs:
              Gid: {{ Gid }}
              Uid: {{ Uid }}
        Functions:
          - FunctionArn: "{{ FunctionArn }}"
            FunctionConfiguration:
              EncodingType: "{{ EncodingType }}"
              Environment:
                AccessSysfs: {{ AccessSysfs }}
                Execution:
                  IsolationMode: "{{ IsolationMode }}"
                  RunAs: "{{ RunAs }}"
                ResourceAccessPolicies:
                  - Permission: "{{ Permission }}"
                    ResourceId: "{{ ResourceId }}"
                Variables: "{{ Variables }}"
              ExecArgs: "{{ ExecArgs }}"
              Executable: "{{ Executable }}"
              MemorySize: {{ MemorySize }}
              Pinned: {{ Pinned }}
              Timeout: {{ Timeout }}
              FunctionRuntimeOverride: "{{ FunctionRuntimeOverride }}"
            Id: "{{ Id }}"
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
    defaultValue="update_function_definition"
    values={[
        { label: 'update_function_definition', value: 'update_function_definition' }
    ]}
>
<TabItem value="update_function_definition">

Updates a Lambda function definition.

```sql
UPDATE aws.greengrass.function_definitions
SET 
Name = '{{ Name }}'
WHERE 
function_definition_id = '{{ function_definition_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_function_definition"
    values={[
        { label: 'delete_function_definition', value: 'delete_function_definition' }
    ]}
>
<TabItem value="delete_function_definition">

Deletes a Lambda function definition.

```sql
DELETE FROM aws.greengrass.function_definitions
WHERE function_definition_id = '{{ function_definition_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
