--- 
title: flows
hide_title: false
hide_table_of_contents: false
keywords:
  - flows
  - bedrock_agent
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

Creates, updates, deletes, gets or lists a <code>flows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent.flows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_flow"
    values={[
        { label: 'get_flow', value: 'get_flow' },
        { label: 'list_flows', value: 'list_flows' }
    ]}
>
<TabItem value="get_flow">

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
    <td>The unique identifier of the flow. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the flow. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow. (pattern: &lt;code&gt;arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:flow/&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the flow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key that the flow is encrypted with. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>The definition of the nodes and connections between the nodes in the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see Create a service row for flows in the Amazon Bedrock User Guide. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/(service-role/)?.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the flow. The following statuses are possible: NotPrepared – The flow has been created or updated, but hasn't been prepared. If you just created the flow, you can't test it. If you updated the flow, the DRAFT version won't contain the latest changes for testing. Send a PrepareFlow request to package the latest changes into the DRAFT version. Preparing – The flow is being prepared so that the DRAFT version contains the latest changes for testing. Prepared – The flow is prepared and the DRAFT version contains the latest changes for testing. Failed – The last API operation that you invoked on the flow failed. Send a GetFlow request and check the error message in the validations field. (Failed, Prepared, Preparing, NotPrepared)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the flow was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="validations" /></td>
    <td><code>array</code></td>
    <td>A list of validation error messages related to the last failed operation on the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the flow for which information was retrieved. (pattern: &lt;code&gt;DRAFT&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_flows">

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
    <td>The unique identifier of the flow. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the flow. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow. (pattern: &lt;code&gt;arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:flow/&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the flow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the flow. The following statuses are possible: NotPrepared – The flow has been created or updated, but hasn't been prepared. If you just created the flow, you can't test it. If you updated the flow, the DRAFT version won't contain the latest changes for testing. Send a PrepareFlow request to package the latest changes into the DRAFT version. Preparing – The flow is being prepared so that the DRAFT version contains the latest changes for testing. Prepared – The flow is prepared and the DRAFT version contains the latest changes for testing. Failed – The last API operation that you invoked on the flow failed. Send a GetFlow request and check the error message in the validations field. (Failed, Prepared, Preparing, NotPrepared)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the flow was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The latest version of the flow. (pattern: &lt;code&gt;DRAFT&lt;/code&gt;)</td>
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
    <td><a href="#get_flow"><CopyableCode code="get_flow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-includedData"><code>includedData</code></a></td>
    <td>Retrieves information about a flow. For more information, see Manage a flow in Amazon Bedrock in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#list_flows"><CopyableCode code="list_flows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of flows and information about each flow. For more information, see Manage a flow in Amazon Bedrock in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#create_flow"><CopyableCode code="create_flow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-executionRoleArn"><code>executionRoleArn</code></a></td>
    <td></td>
    <td>Creates a prompt flow that you can use to send an input through various steps to yield an output. Configure nodes, each of which corresponds to a step of the flow, and create connections between the nodes to create paths to different outputs. For more information, see How it works and Create a flow in Amazon Bedrock in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#update_flow"><CopyableCode code="update_flow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-executionRoleArn"><code>executionRoleArn</code></a></td>
    <td></td>
    <td>Modifies a flow. Include both fields that you want to keep and fields that you want to change. For more information, see How it works and Create a flow in Amazon Bedrock in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_flow"><CopyableCode code="delete_flow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-skipResourceInUseCheck"><code>skipResourceInUseCheck</code></a></td>
    <td>Deletes a flow.</td>
</tr>
<tr>
    <td><a href="#prepare_flow"><CopyableCode code="prepare_flow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Prepares the DRAFT version of a flow so that it can be invoked. For more information, see Test a flow in Amazon Bedrock in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#validate_flow_definition"><CopyableCode code="validate_flow_definition" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-definition"><code>definition</code></a></td>
    <td></td>
    <td>Validates the definition of a flow.</td>
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
<tr id="parameter-flow_identifier">
    <td><CopyableCode code="flow_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-includedData">
    <td><CopyableCode code="includedData" /></td>
    <td><code>string</code></td>
    <td>Controls the scope of data returned. Set to METADATA_ONLY to return only resource metadata. Set to ALL_DATA or omit this field to return the full response.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
<tr id="parameter-skipResourceInUseCheck">
    <td><CopyableCode code="skipResourceInUseCheck" /></td>
    <td><code>boolean</code></td>
    <td>By default, this value is false and deletion is stopped if the resource is in use. If you set it to true, the resource will be deleted even if the resource is in use.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_flow"
    values={[
        { label: 'get_flow', value: 'get_flow' },
        { label: 'list_flows', value: 'list_flows' }
    ]}
>
<TabItem value="get_flow">

Retrieves information about a flow. For more information, see Manage a flow in Amazon Bedrock in the Amazon Bedrock User Guide.

```sql
SELECT
id,
name,
arn,
created_at,
customer_encryption_key_arn,
definition,
description,
execution_role_arn,
status,
updated_at,
validations,
version
FROM aws.bedrock_agent.flows
WHERE flow_identifier = '{{ flow_identifier }}' -- required
AND region = '{{ region }}' -- required
AND includedData = '{{ includedData }}'
;
```
</TabItem>
<TabItem value="list_flows">

Returns a list of flows and information about each flow. For more information, see Manage a flow in Amazon Bedrock in the Amazon Bedrock User Guide.

```sql
SELECT
id,
name,
arn,
created_at,
description,
status,
updated_at,
version
FROM aws.bedrock_agent.flows
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_flow"
    values={[
        { label: 'create_flow', value: 'create_flow' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_flow">

Creates a prompt flow that you can use to send an input through various steps to yield an output. Configure nodes, each of which corresponds to a step of the flow, and create connections between the nodes to create paths to different outputs. For more information, see How it works and Create a flow in Amazon Bedrock in the Amazon Bedrock User Guide.

```sql
INSERT INTO aws.bedrock_agent.flows (
name,
description,
executionRoleArn,
customerEncryptionKeyArn,
definition,
clientToken,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ executionRoleArn }}' /* required */,
'{{ customerEncryptionKeyArn }}',
'{{ definition }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
arn,
created_at,
customer_encryption_key_arn,
definition,
description,
execution_role_arn,
status,
updated_at,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: flows
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the flows resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: executionRoleArn
      value: "{{ executionRoleArn }}"
    - name: customerEncryptionKeyArn
      value: "{{ customerEncryptionKeyArn }}"
    - name: definition
      description: |
        The definition of the nodes and connections between nodes in the flow.
      value:
        nodes:
          - name: "{{ name }}"
            type_: "{{ type_ }}"
            configuration:
              input: "{{ input }}"
              output: "{{ output }}"
              knowledgeBase:
                knowledgeBaseId: "{{ knowledgeBaseId }}"
                modelId: "{{ modelId }}"
                guardrailConfiguration:
                  guardrailIdentifier: "{{ guardrailIdentifier }}"
                  guardrailVersion: "{{ guardrailVersion }}"
                numberOfResults: {{ numberOfResults }}
                promptTemplate:
                  textPromptTemplate: "{{ textPromptTemplate }}"
                inferenceConfiguration:
                  text: "{{ text }}"
                rerankingConfiguration:
                  type_: "{{ type_ }}"
                  bedrockRerankingConfiguration: "{{ bedrockRerankingConfiguration }}"
                orchestrationConfiguration:
                  promptTemplate: "{{ promptTemplate }}"
                  inferenceConfig: "{{ inferenceConfig }}"
                  additionalModelRequestFields: "{{ additionalModelRequestFields }}"
                  performanceConfig: "{{ performanceConfig }}"
              condition:
                conditions:
                  - name: "{{ name }}"
                    expression: "{{ expression }}"
              lex:
                botAliasArn: "{{ botAliasArn }}"
                localeId: "{{ localeId }}"
              prompt:
                sourceConfiguration:
                  resource: "{{ resource }}"
                  inline: "{{ inline }}"
                guardrailConfiguration:
                  guardrailIdentifier: "{{ guardrailIdentifier }}"
                  guardrailVersion: "{{ guardrailVersion }}"
              lambdaFunction:
                lambdaArn: "{{ lambdaArn }}"
              storage:
                serviceConfiguration:
                  s3: "{{ s3 }}"
              agent:
                agentAliasArn: "{{ agentAliasArn }}"
              retrieval:
                serviceConfiguration:
                  s3: "{{ s3 }}"
              iterator: "{{ iterator }}"
              collector: "{{ collector }}"
              inlineCode:
                code: "{{ code }}"
                language: "{{ language }}"
              loop:
                definition:
                  nodes: "{{ nodes }}"
                  connections: "{{ connections }}"
              loopInput: "{{ loopInput }}"
              loopController:
                continueCondition:
                  name: "{{ name }}"
                  expression: "{{ expression }}"
                maxIterations: {{ maxIterations }}
            inputs: "{{ inputs }}"
            outputs: "{{ outputs }}"
        connections:
          - type_: "{{ type_ }}"
            name: "{{ name }}"
            source: "{{ source }}"
            target: "{{ target }}"
            configuration:
              data:
                sourceOutput: "{{ sourceOutput }}"
                targetInput: "{{ targetInput }}"
              conditional:
                condition: "{{ condition }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_flow"
    values={[
        { label: 'update_flow', value: 'update_flow' }
    ]}
>
<TabItem value="update_flow">

Modifies a flow. Include both fields that you want to keep and fields that you want to change. For more information, see How it works and Create a flow in Amazon Bedrock in the Amazon Bedrock User Guide.

```sql
UPDATE aws.bedrock_agent.flows
SET 
name = '{{ name }}',
description = '{{ description }}',
executionRoleArn = '{{ executionRoleArn }}',
customerEncryptionKeyArn = '{{ customerEncryptionKeyArn }}',
definition = '{{ definition }}'
WHERE 
flow_identifier = '{{ flow_identifier }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND executionRoleArn = '{{ executionRoleArn }}' --required
RETURNING
id,
name,
arn,
created_at,
customer_encryption_key_arn,
definition,
description,
execution_role_arn,
status,
updated_at,
version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_flow"
    values={[
        { label: 'delete_flow', value: 'delete_flow' }
    ]}
>
<TabItem value="delete_flow">

Deletes a flow.

```sql
DELETE FROM aws.bedrock_agent.flows
WHERE flow_identifier = '{{ flow_identifier }}' --required
AND region = '{{ region }}' --required
AND skipResourceInUseCheck = '{{ skipResourceInUseCheck }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="prepare_flow"
    values={[
        { label: 'prepare_flow', value: 'prepare_flow' },
        { label: 'validate_flow_definition', value: 'validate_flow_definition' }
    ]}
>
<TabItem value="prepare_flow">

Prepares the DRAFT version of a flow so that it can be invoked. For more information, see Test a flow in Amazon Bedrock in the Amazon Bedrock User Guide.

```sql
EXEC aws.bedrock_agent.flows.prepare_flow 
@flow_identifier='{{ flow_identifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="validate_flow_definition">

Validates the definition of a flow.

```sql
EXEC aws.bedrock_agent.flows.validate_flow_definition 
@region='{{ region }}' --required 
@@json=
'{
"definition": "{{ definition }}"
}'
;
```
</TabItem>
</Tabs>
