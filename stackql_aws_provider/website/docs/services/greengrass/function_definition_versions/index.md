--- 
title: function_definition_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - function_definition_versions
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

Creates, updates, deletes, gets or lists a <code>function_definition_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="function_definition_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrass.function_definition_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_function_definition_version"
    values={[
        { label: 'get_function_definition_version', value: 'get_function_definition_version' },
        { label: 'list_function_definition_versions', value: 'list_function_definition_versions' }
    ]}
>
<TabItem value="get_function_definition_version">

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
    <td>The ARN of the function definition version.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTimestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the function definition version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Definition" /></td>
    <td><code>object</code></td>
    <td>Information about a function definition version.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the function definition version.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or ''null'' if there are no additional results.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>string</code></td>
    <td>The version of the function definition version.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_function_definition_versions">

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
    <td>The ARN of the version.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTimestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the parent definition that the version is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>string</code></td>
    <td>The ID of the version.</td>
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
    <td><a href="#get_function_definition_version"><CopyableCode code="get_function_definition_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_definition_id"><code>function_definition_id</code></a>, <a href="#parameter-function_definition_version_id"><code>function_definition_version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.</td>
</tr>
<tr>
    <td><a href="#list_function_definition_versions"><CopyableCode code="list_function_definition_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_definition_id"><code>function_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists the versions of a Lambda function definition.</td>
</tr>
<tr>
    <td><a href="#create_function_definition_version"><CopyableCode code="create_function_definition_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-function_definition_id"><code>function_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Client-Token"><code>X-Amzn-Client-Token</code></a></td>
    <td>Creates a version of a Lambda function definition that has already been defined.</td>
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
<tr id="parameter-function_definition_version_id">
    <td><CopyableCode code="function_definition_version_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the function definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListFunctionDefinitionVersions'' requests. If the version is the last one that was associated with a function definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.</td>
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
    defaultValue="get_function_definition_version"
    values={[
        { label: 'get_function_definition_version', value: 'get_function_definition_version' },
        { label: 'list_function_definition_versions', value: 'list_function_definition_versions' }
    ]}
>
<TabItem value="get_function_definition_version">

Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.

```sql
SELECT
Arn,
CreationTimestamp,
Definition,
Id,
NextToken,
Version
FROM aws.greengrass.function_definition_versions
WHERE function_definition_id = '{{ function_definition_id }}' -- required
AND function_definition_version_id = '{{ function_definition_version_id }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
<TabItem value="list_function_definition_versions">

Lists the versions of a Lambda function definition.

```sql
SELECT
Arn,
CreationTimestamp,
Id,
Version
FROM aws.greengrass.function_definition_versions
WHERE function_definition_id = '{{ function_definition_id }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_function_definition_version"
    values={[
        { label: 'create_function_definition_version', value: 'create_function_definition_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_function_definition_version">

Creates a version of a Lambda function definition that has already been defined.

```sql
INSERT INTO aws.greengrass.function_definition_versions (
DefaultConfig,
Functions,
function_definition_id,
region,
`X-Amzn-Client-Token`
)
SELECT 
'{{ DefaultConfig }}',
'{{ Functions }}',
'{{ function_definition_id }}',
'{{ region }}',
'{{ X-Amzn-Client-Token }}'
RETURNING
Arn,
CreationTimestamp,
Id,
Version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: function_definition_versions
  props:
    - name: function_definition_id
      value: "{{ function_definition_id }}"
      description: Required parameter for the function_definition_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the function_definition_versions resource.
    - name: DefaultConfig
      description: |
        The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
      value:
        Execution:
          IsolationMode: "{{ IsolationMode }}"
          RunAs:
            Gid: {{ Gid }}
            Uid: {{ Uid }}
    - name: Functions
      value:
        - FunctionArn: "{{ FunctionArn }}"
          FunctionConfiguration:
            EncodingType: "{{ EncodingType }}"
            Environment:
              AccessSysfs: {{ AccessSysfs }}
              Execution:
                IsolationMode: "{{ IsolationMode }}"
                RunAs:
                  Gid: {{ Gid }}
                  Uid: {{ Uid }}
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
    - name: X-Amzn-Client-Token
      value: "{{ X-Amzn-Client-Token }}"
      description: A client token used to correlate requests and responses.
      description: A client token used to correlate requests and responses.
`}</CodeBlock>

</TabItem>
</Tabs>
