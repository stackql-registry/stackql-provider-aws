--- 
title: blueprints
hide_title: false
hide_table_of_contents: false
keywords:
  - blueprints
  - bedrock_data_automation
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

Creates, updates, deletes, gets or lists a <code>blueprints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="blueprints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_data_automation.blueprints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_blueprint"
    values={[
        { label: 'get_blueprint', value: 'get_blueprint' },
        { label: 'list_blueprints', value: 'list_blueprints' }
    ]}
>
<TabItem value="get_blueprint">

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
    <td><CopyableCode code="blueprintArn" /></td>
    <td><code>string</code></td>
    <td>ARN of a Blueprint (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):bedrock:&#91;a-zA-Z0-9-&#93;*:(aws|&#91;0-9&#93;&#123;12&#125;):blueprint/(bedrock-data-automation-public-&#91;a-zA-Z0-9-_&#93;&#123;1,30&#125;|&#91;a-zA-Z0-9-&#93;&#123;12,36&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="blueprintName" /></td>
    <td><code>string</code></td>
    <td>Name of the Blueprint (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="blueprintStage" /></td>
    <td><code>string</code></td>
    <td>Stage of the Blueprint (DEVELOPMENT, LIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="blueprintVersion" /></td>
    <td><code>string</code></td>
    <td>Blueprint Version (pattern: &lt;code&gt;&#91;0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time Stamp</td>
</tr>
<tr>
    <td><CopyableCode code="kmsEncryptionContext" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>KMS Key Identifier (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time Stamp</td>
</tr>
<tr>
    <td><CopyableCode code="optimizationSamples" /></td>
    <td><code>array</code></td>
    <td>List of Blueprint Optimization Samples</td>
</tr>
<tr>
    <td><CopyableCode code="optimizationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time Stamp</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>Schema of the blueprint</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Type (DOCUMENT, IMAGE, AUDIO, VIDEO)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_blueprints">

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
    <td><CopyableCode code="blueprintArn" /></td>
    <td><code>string</code></td>
    <td>ARN of a Blueprint (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):bedrock:&#91;a-zA-Z0-9-&#93;*:(aws|&#91;0-9&#93;&#123;12&#125;):blueprint/(bedrock-data-automation-public-&#91;a-zA-Z0-9-_&#93;&#123;1,30&#125;|&#91;a-zA-Z0-9-&#93;&#123;12,36&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="blueprintName" /></td>
    <td><code>string</code></td>
    <td>Name of the Blueprint (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="blueprintStage" /></td>
    <td><code>string</code></td>
    <td>Stage of the Blueprint (DEVELOPMENT, LIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="blueprintVersion" /></td>
    <td><code>string</code></td>
    <td>Blueprint Version (pattern: &lt;code&gt;&#91;0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time Stamp</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time Stamp</td>
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
    <td><a href="#get_blueprint"><CopyableCode code="get_blueprint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-blueprint_arn"><code>blueprint_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an existing Amazon Bedrock Data Automation Blueprint</td>
</tr>
<tr>
    <td><a href="#list_blueprints"><CopyableCode code="list_blueprints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all existing Amazon Bedrock Data Automation Blueprints</td>
</tr>
<tr>
    <td><a href="#create_blueprint"><CopyableCode code="create_blueprint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-blueprintName"><code>blueprintName</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-schema"><code>schema</code></a></td>
    <td></td>
    <td>Creates an Amazon Bedrock Data Automation Blueprint</td>
</tr>
<tr>
    <td><a href="#create_blueprint_version"><CopyableCode code="create_blueprint_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-blueprint_arn"><code>blueprint_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new version of an existing Amazon Bedrock Data Automation Blueprint</td>
</tr>
<tr>
    <td><a href="#update_blueprint"><CopyableCode code="update_blueprint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-blueprint_arn"><code>blueprint_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-schema"><code>schema</code></a></td>
    <td></td>
    <td>Updates an existing Amazon Bedrock Data Automation Blueprint</td>
</tr>
<tr>
    <td><a href="#delete_blueprint"><CopyableCode code="delete_blueprint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-blueprint_arn"><code>blueprint_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-blueprintVersion"><code>blueprintVersion</code></a></td>
    <td>Deletes an existing Amazon Bedrock Data Automation Blueprint</td>
</tr>
<tr>
    <td><a href="#copy_blueprint_stage"><CopyableCode code="copy_blueprint_stage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-blueprint_arn"><code>blueprint_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceStage"><code>sourceStage</code></a>, <a href="#parameter-targetStage"><code>targetStage</code></a></td>
    <td></td>
    <td>Copies a Blueprint from one stage to another</td>
</tr>
<tr>
    <td><a href="#invoke_blueprint_optimization_async"><CopyableCode code="invoke_blueprint_optimization_async" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-blueprint"><code>blueprint</code></a>, <a href="#parameter-samples"><code>samples</code></a>, <a href="#parameter-outputConfiguration"><code>outputConfiguration</code></a>, <a href="#parameter-dataAutomationProfileArn"><code>dataAutomationProfileArn</code></a></td>
    <td></td>
    <td>Invoke an async job to perform Blueprint Optimization</td>
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
<tr id="parameter-blueprint_arn">
    <td><CopyableCode code="blueprint_arn" /></td>
    <td><code>string</code></td>
    <td>Blueprint to be copied</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-blueprintVersion">
    <td><CopyableCode code="blueprintVersion" /></td>
    <td><code>string</code></td>
    <td>Optional field to delete a specific Blueprint version</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_blueprint"
    values={[
        { label: 'get_blueprint', value: 'get_blueprint' },
        { label: 'list_blueprints', value: 'list_blueprints' }
    ]}
>
<TabItem value="get_blueprint">

Gets an existing Amazon Bedrock Data Automation Blueprint

```sql
SELECT
blueprintArn,
blueprintName,
blueprintStage,
blueprintVersion,
creationTime,
kmsEncryptionContext,
kmsKeyId,
lastModifiedTime,
optimizationSamples,
optimizationTime,
schema,
type_
FROM aws.bedrock_data_automation.blueprints
WHERE blueprint_arn = '{{ blueprint_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_blueprints">

Lists all existing Amazon Bedrock Data Automation Blueprints

```sql
SELECT
blueprintArn,
blueprintName,
blueprintStage,
blueprintVersion,
creationTime,
lastModifiedTime
FROM aws.bedrock_data_automation.blueprints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_blueprint"
    values={[
        { label: 'create_blueprint', value: 'create_blueprint' },
        { label: 'create_blueprint_version', value: 'create_blueprint_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_blueprint">

Creates an Amazon Bedrock Data Automation Blueprint

```sql
INSERT INTO aws.bedrock_data_automation.blueprints (
blueprintName,
type,
blueprintStage,
schema,
clientToken,
encryptionConfiguration,
tags,
region
)
SELECT 
'{{ blueprintName }}' /* required */,
'{{ type }}' /* required */,
'{{ blueprintStage }}',
'{{ schema }}' /* required */,
'{{ clientToken }}',
'{{ encryptionConfiguration }}',
'{{ tags }}',
'{{ region }}'
RETURNING
blueprint
;
```
</TabItem>
<TabItem value="create_blueprint_version">

Creates a new version of an existing Amazon Bedrock Data Automation Blueprint

```sql
INSERT INTO aws.bedrock_data_automation.blueprints (
clientToken,
blueprint_arn,
region
)
SELECT 
'{{ clientToken }}',
'{{ blueprint_arn }}',
'{{ region }}'
RETURNING
blueprint
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: blueprints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the blueprints resource.
    - name: blueprint_arn
      value: "{{ blueprint_arn }}"
      description: Required parameter for the blueprints resource.
    - name: blueprintName
      value: "{{ blueprintName }}"
      description: |
        Name of the Blueprint
    - name: type
      value: "{{ type }}"
      description: |
        Type
      valid_values: ['DOCUMENT', 'IMAGE', 'AUDIO', 'VIDEO']
    - name: blueprintStage
      value: "{{ blueprintStage }}"
      description: |
        Stage of the Blueprint
      valid_values: ['DEVELOPMENT', 'LIVE']
    - name: schema
      value: "{{ schema }}"
      description: |
        Schema of the blueprint
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Client specified token used for idempotency checks
    - name: encryptionConfiguration
      description: |
        KMS Encryption Configuration
      value:
        kmsKeyId: "{{ kmsKeyId }}"
        kmsEncryptionContext: "{{ kmsEncryptionContext }}"
    - name: tags
      description: |
        List of tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_blueprint"
    values={[
        { label: 'update_blueprint', value: 'update_blueprint' }
    ]}
>
<TabItem value="update_blueprint">

Updates an existing Amazon Bedrock Data Automation Blueprint

```sql
UPDATE aws.bedrock_data_automation.blueprints
SET 
schema = '{{ schema }}',
blueprintStage = '{{ blueprintStage }}',
encryptionConfiguration = '{{ encryptionConfiguration }}'
WHERE 
blueprint_arn = '{{ blueprint_arn }}' --required
AND region = '{{ region }}' --required
AND schema = '{{ schema }}' --required
RETURNING
blueprint;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_blueprint"
    values={[
        { label: 'delete_blueprint', value: 'delete_blueprint' }
    ]}
>
<TabItem value="delete_blueprint">

Deletes an existing Amazon Bedrock Data Automation Blueprint

```sql
DELETE FROM aws.bedrock_data_automation.blueprints
WHERE blueprint_arn = '{{ blueprint_arn }}' --required
AND region = '{{ region }}' --required
AND blueprintVersion = '{{ blueprintVersion }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copy_blueprint_stage"
    values={[
        { label: 'copy_blueprint_stage', value: 'copy_blueprint_stage' },
        { label: 'invoke_blueprint_optimization_async', value: 'invoke_blueprint_optimization_async' }
    ]}
>
<TabItem value="copy_blueprint_stage">

Copies a Blueprint from one stage to another

```sql
EXEC aws.bedrock_data_automation.blueprints.copy_blueprint_stage 
@blueprint_arn='{{ blueprint_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"sourceStage": "{{ sourceStage }}", 
"targetStage": "{{ targetStage }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="invoke_blueprint_optimization_async">

Invoke an async job to perform Blueprint Optimization

```sql
EXEC aws.bedrock_data_automation.blueprints.invoke_blueprint_optimization_async 
@region='{{ region }}' --required 
@@json=
'{
"blueprint": "{{ blueprint }}", 
"samples": "{{ samples }}", 
"outputConfiguration": "{{ outputConfiguration }}", 
"dataAutomationProfileArn": "{{ dataAutomationProfileArn }}", 
"encryptionConfiguration": "{{ encryptionConfiguration }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
</Tabs>
