--- 
title: code_interpreters
hide_title: false
hide_table_of_contents: false
keywords:
  - code_interpreters
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists a <code>code_interpreters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_interpreters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.code_interpreters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_code_interpreter"
    values={[
        { label: 'get_code_interpreter', value: 'get_code_interpreter' },
        { label: 'list_code_interpreters', value: 'list_code_interpreters' }
    ]}
>
<TabItem value="get_code_interpreter">

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
    <td>The name of the code interpreter. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="certificates" /></td>
    <td><code>array</code></td>
    <td>The list of certificates configured for the code interpreter.</td>
</tr>
<tr>
    <td><CopyableCode code="code_interpreter_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the code interpreter. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:(aws|&#91;0-9&#93;&#123;12&#125;):code-interpreter(-custom)?/(aws\.codeinterpreter\.v1|&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="code_interpreter_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the code interpreter. (pattern: &lt;code&gt;(aws\.codeinterpreter\.v1|&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the code interpreter was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the code interpreter.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The IAM role ARN that provides permissions for the code interpreter. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for failure if the code interpreter is in a failed state.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the code interpreter was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="network_configuration" /></td>
    <td><code>object</code></td>
    <td>The network configuration for a code interpreter. This structure defines how the code interpreter connects to the network.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the code interpreter. (CREATING, CREATE_FAILED, READY, DELETING, DELETE_FAILED, DELETED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_code_interpreters">

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
    <td>The name of the code interpreter. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="code_interpreter_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the code interpreter. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:(aws|&#91;0-9&#93;&#123;12&#125;):code-interpreter(-custom)?/(aws\.codeinterpreter\.v1|&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="code_interpreter_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the code interpreter. (pattern: &lt;code&gt;(aws\.codeinterpreter\.v1|&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the code interpreter was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the code interpreter.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the code interpreter was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the code interpreter. (CREATING, CREATE_FAILED, READY, DELETING, DELETE_FAILED, DELETED)</td>
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
    <td><a href="#get_code_interpreter"><CopyableCode code="get_code_interpreter" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-code_interpreter_id"><code>code_interpreter_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a custom code interpreter.</td>
</tr>
<tr>
    <td><a href="#list_code_interpreters"><CopyableCode code="list_code_interpreters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Lists all custom code interpreters in your account.</td>
</tr>
<tr>
    <td><a href="#create_code_interpreter"><CopyableCode code="create_code_interpreter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-networkConfiguration"><code>networkConfiguration</code></a></td>
    <td></td>
    <td>Creates a custom code interpreter.</td>
</tr>
<tr>
    <td><a href="#delete_code_interpreter"><CopyableCode code="delete_code_interpreter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-code_interpreter_id"><code>code_interpreter_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a custom code interpreter.</td>
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
<tr id="parameter-code_interpreter_id">
    <td><CopyableCode code="code_interpreter_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the code interpreter to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure idempotency of the request.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next page of results.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of code interpreters to list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_code_interpreter"
    values={[
        { label: 'get_code_interpreter', value: 'get_code_interpreter' },
        { label: 'list_code_interpreters', value: 'list_code_interpreters' }
    ]}
>
<TabItem value="get_code_interpreter">

Gets information about a custom code interpreter.

```sql
SELECT
name,
certificates,
code_interpreter_arn,
code_interpreter_id,
created_at,
description,
execution_role_arn,
failure_reason,
last_updated_at,
network_configuration,
status
FROM aws.bedrock_agentcore_control.code_interpreters
WHERE code_interpreter_id = '{{ code_interpreter_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_code_interpreters">

Lists all custom code interpreters in your account.

```sql
SELECT
name,
code_interpreter_arn,
code_interpreter_id,
created_at,
description,
last_updated_at,
status
FROM aws.bedrock_agentcore_control.code_interpreters
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND type = '{{ type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_code_interpreter"
    values={[
        { label: 'create_code_interpreter', value: 'create_code_interpreter' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_code_interpreter">

Creates a custom code interpreter.

```sql
INSERT INTO aws.bedrock_agentcore_control.code_interpreters (
name,
description,
executionRoleArn,
networkConfiguration,
certificates,
clientToken,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ executionRoleArn }}',
'{{ networkConfiguration }}' /* required */,
'{{ certificates }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
code_interpreter_arn,
code_interpreter_id,
created_at,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: code_interpreters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the code_interpreters resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: executionRoleArn
      value: "{{ executionRoleArn }}"
    - name: networkConfiguration
      description: |
        The network configuration for a code interpreter. This structure defines how the code interpreter connects to the network.
      value:
        networkMode: "{{ networkMode }}"
        vpcConfig:
          securityGroups:
            - "{{ securityGroups }}"
          subnets:
            - "{{ subnets }}"
          requireServiceS3Endpoint: {{ requireServiceS3Endpoint }}
    - name: certificates
      value:
        - location:
            secretsManager:
              secretArn: "{{ secretArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_code_interpreter"
    values={[
        { label: 'delete_code_interpreter', value: 'delete_code_interpreter' }
    ]}
>
<TabItem value="delete_code_interpreter">

Deletes a custom code interpreter.

```sql
DELETE FROM aws.bedrock_agentcore_control.code_interpreters
WHERE code_interpreter_id = '{{ code_interpreter_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
