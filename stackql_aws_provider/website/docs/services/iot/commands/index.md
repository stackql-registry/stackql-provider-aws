--- 
title: commands
hide_title: false
hide_table_of_contents: false
keywords:
  - commands
  - iot
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

Creates, updates, deletes, gets or lists a <code>commands</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="commands" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.commands" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_command"
    values={[
        { label: 'get_command', value: 'get_command' },
        { label: 'list_commands', value: 'list_commands' }
    ]}
>
<TabItem value="get_command">

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
    <td><CopyableCode code="command_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the command. For example, arn:aws:iot:<code>&lt;region&gt;</code>:<code>&lt;accountid&gt;</code>:command/<code>&lt;commandId&gt;</code></td>
</tr>
<tr>
    <td><CopyableCode code="command_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the command. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp, when the command was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deprecated_" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the command has been deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short text description of the command. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name in the console for the command. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp, when the command was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="mandatory_parameters" /></td>
    <td><code>array</code></td>
    <td>A list of parameters for the command created.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the command. (AWS-IoT, AWS-IoT-FleetWise)</td>
</tr>
<tr>
    <td><CopyableCode code="payload" /></td>
    <td><code>object</code></td>
    <td>The command payload object that contains the instructions for the device to process.</td>
</tr>
<tr>
    <td><CopyableCode code="payload_template" /></td>
    <td><code>string</code></td>
    <td>The payload template for the dynamic command.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_deletion" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the command is being deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="preprocessor" /></td>
    <td><code>object</code></td>
    <td>Configuration that determines how the payloadTemplate is processed by the service to generate the final payload sent to devices at StartCommandExecution API invocation.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The IAM role that you provided when creating the command with AWS-IoT-FleetWise as the namespace.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_commands">

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
    <td><CopyableCode code="command_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the command.</td>
</tr>
<tr>
    <td><CopyableCode code="command_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the command. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp, when the command was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deprecated_" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the command has been deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the command. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp, when the command was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_deletion" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the command is pending deletion.</td>
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
    <td><a href="#get_command"><CopyableCode code="get_command" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-command_id"><code>command_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified command.</td>
</tr>
<tr>
    <td><a href="#list_commands"><CopyableCode code="list_commands" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-commandParameterName"><code>commandParameterName</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>List all commands in your account.</td>
</tr>
<tr>
    <td><a href="#create_command"><CopyableCode code="create_command" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-command_id"><code>command_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a command. A command contains reusable configurations that can be applied before they are sent to the devices.</td>
</tr>
<tr>
    <td><a href="#update_command"><CopyableCode code="update_command" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-command_id"><code>command_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update information about a command or mark a command for deprecation.</td>
</tr>
<tr>
    <td><a href="#delete_command"><CopyableCode code="delete_command" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-command_id"><code>command_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a command resource.</td>
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
<tr id="parameter-command_id">
    <td><CopyableCode code="command_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the command to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-commandParameterName">
    <td><CopyableCode code="commandParameterName" /></td>
    <td><code>string</code></td>
    <td>A filter that can be used to display the list of commands that have a specific command parameter name.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this operation. By default, the API returns up to a maximum of 25 results. You can override this default value to return up to a maximum of 100 results for this operation.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the command. By default, the API returns all commands that have been created for both AWS-IoT and AWS-IoT-FleetWise namespaces. You can override this default value if you want to return all commands that have been created only for a specific namespace.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Specify whether to list the commands that you have created in the ascending or descending order. By default, the API returns all commands in the descending order based on the time that they were created.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_command"
    values={[
        { label: 'get_command', value: 'get_command' },
        { label: 'list_commands', value: 'list_commands' }
    ]}
>
<TabItem value="get_command">

Gets information about the specified command.

```sql
SELECT
command_arn,
command_id,
created_at,
deprecated_,
description,
display_name,
last_updated_at,
mandatory_parameters,
namespace,
payload,
payload_template,
pending_deletion,
preprocessor,
role_arn
FROM aws.iot.commands
WHERE command_id = '{{ command_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_commands">

List all commands in your account.

```sql
SELECT
command_arn,
command_id,
created_at,
deprecated_,
display_name,
last_updated_at,
pending_deletion
FROM aws.iot.commands
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND namespace = '{{ namespace }}'
AND commandParameterName = '{{ commandParameterName }}'
AND sortOrder = '{{ sortOrder }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_command"
    values={[
        { label: 'create_command', value: 'create_command' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_command">

Creates a command. A command contains reusable configurations that can be applied before they are sent to the devices.

```sql
INSERT INTO aws.iot.commands (
namespace,
displayName,
description,
payload,
payloadTemplate,
preprocessor,
mandatoryParameters,
roleArn,
tags,
command_id,
region
)
SELECT 
'{{ namespace }}',
'{{ displayName }}',
'{{ description }}',
'{{ payload }}',
'{{ payloadTemplate }}',
'{{ preprocessor }}',
'{{ mandatoryParameters }}',
'{{ roleArn }}',
'{{ tags }}',
'{{ command_id }}',
'{{ region }}'
RETURNING
command_arn,
command_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: commands
  props:
    - name: command_id
      value: "{{ command_id }}"
      description: Required parameter for the commands resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the commands resource.
    - name: namespace
      value: "{{ namespace }}"
      valid_values: ['AWS-IoT', 'AWS-IoT-FleetWise']
    - name: displayName
      value: "{{ displayName }}"
    - name: description
      value: "{{ description }}"
    - name: payload
      description: |
        The command payload object that contains the instructions for the device to process.
      value:
        content: "{{ content }}"
        contentType: "{{ contentType }}"
    - name: payloadTemplate
      value: "{{ payloadTemplate }}"
    - name: preprocessor
      description: |
        Configuration that determines how the payloadTemplate is processed by the service to generate the final payload sent to devices at StartCommandExecution API invocation.
      value:
        awsJsonSubstitution:
          outputFormat: "{{ outputFormat }}"
    - name: mandatoryParameters
      value:
        - name: "{{ name }}"
          type_: "{{ type_ }}"
          value:
            S: "{{ S }}"
            B: {{ B }}
            I: {{ I }}
            L: {{ L }}
            D: {{ D }}
            BIN: "{{ BIN }}"
            UL: "{{ UL }}"
          defaultValue:
            S: "{{ S }}"
            B: {{ B }}
            I: {{ I }}
            L: {{ L }}
            D: {{ D }}
            BIN: "{{ BIN }}"
            UL: "{{ UL }}"
          valueConditions: "{{ valueConditions }}"
          description: "{{ description }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_command"
    values={[
        { label: 'update_command', value: 'update_command' }
    ]}
>
<TabItem value="update_command">

Update information about a command or mark a command for deprecation.

```sql
UPDATE aws.iot.commands
SET 
displayName = '{{ displayName }}',
description = '{{ description }}',
deprecated = {{ deprecated }}
WHERE 
command_id = '{{ command_id }}' --required
AND region = '{{ region }}' --required
RETURNING
command_id,
deprecated_,
description,
display_name,
last_updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_command"
    values={[
        { label: 'delete_command', value: 'delete_command' }
    ]}
>
<TabItem value="delete_command">

Delete a command resource.

```sql
DELETE FROM aws.iot.commands
WHERE command_id = '{{ command_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
