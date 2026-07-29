--- 
title: data_automation_libraries
hide_title: false
hide_table_of_contents: false
keywords:
  - data_automation_libraries
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

Creates, updates, deletes, gets or lists a <code>data_automation_libraries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_automation_libraries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_data_automation.data_automation_libraries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_automation_library"
    values={[
        { label: 'get_data_automation_library', value: 'get_data_automation_library' },
        { label: 'list_data_automation_libraries', value: 'list_data_automation_libraries' }
    ]}
>
<TabItem value="get_data_automation_library">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time Stamp</td>
</tr>
<tr>
    <td><CopyableCode code="entity_types" /></td>
    <td><code>array</code></td>
    <td>List of info for each entity type in the DataAutomationLibrary</td>
</tr>
<tr>
    <td><CopyableCode code="kms_encryption_context" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>KMS Key Identifier (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="library_arn" /></td>
    <td><code>string</code></td>
    <td>ARN generated at the server side when a DataAutomationLibrary is created (pattern: &lt;code&gt;arn:aws(|-cn|-iso|-iso-&#91;a-z&#93;|-us-gov):bedrock:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:data-automation-library/&#91;a-zA-Z0-9-&#93;&#123;12,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="library_description" /></td>
    <td><code>string</code></td>
    <td>Description of the DataAutomationLibrary (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s!"\#\$%'&\(\)\*\+\,\-\./:;=\?@\&#91;\\\&#93;\^_`\&#123;\|\&#125;~&gt;&lt;À-ÖØ-Üßà-öø-üẞ¿¡Œ-œ°£¥₹€§©ª®™¹±-µ✓⑆-⑉฿₽₱₦₣₩₫₺&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="library_name" /></td>
    <td><code>string</code></td>
    <td>Name of the DataAutomationLibrary (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of DataAutomationLibrary (ACTIVE, DELETING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_automation_libraries">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time Stamp</td>
</tr>
<tr>
    <td><CopyableCode code="library_arn" /></td>
    <td><code>string</code></td>
    <td>ARN generated at the server side when a DataAutomationLibrary is created (pattern: &lt;code&gt;arn:aws(|-cn|-iso|-iso-&#91;a-z&#93;|-us-gov):bedrock:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:data-automation-library/&#91;a-zA-Z0-9-&#93;&#123;12,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="library_name" /></td>
    <td><code>string</code></td>
    <td>Name of the DataAutomationLibrary (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_data_automation_library"><CopyableCode code="get_data_automation_library" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-library_arn"><code>library_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an existing Amazon Bedrock Data Automation Library</td>
</tr>
<tr>
    <td><a href="#list_data_automation_libraries"><CopyableCode code="list_data_automation_libraries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all existing Amazon Bedrock Data Automation Libraries</td>
</tr>
<tr>
    <td><a href="#create_data_automation_library"><CopyableCode code="create_data_automation_library" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-libraryName"><code>libraryName</code></a></td>
    <td></td>
    <td>Creates an Amazon Bedrock Data Automation Library</td>
</tr>
<tr>
    <td><a href="#update_data_automation_library"><CopyableCode code="update_data_automation_library" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-library_arn"><code>library_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing Amazon Bedrock Data Automation Library</td>
</tr>
<tr>
    <td><a href="#delete_data_automation_library"><CopyableCode code="delete_data_automation_library" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-library_arn"><code>library_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing Amazon Bedrock Data Automation Library</td>
</tr>
<tr>
    <td><a href="#invoke_data_automation_library_ingestion_job"><CopyableCode code="invoke_data_automation_library_ingestion_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-library_arn"><code>library_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inputConfiguration"><code>inputConfiguration</code></a>, <a href="#parameter-entityType"><code>entityType</code></a>, <a href="#parameter-operationType"><code>operationType</code></a>, <a href="#parameter-outputConfiguration"><code>outputConfiguration</code></a></td>
    <td></td>
    <td>Async API: Invoke data automation library ingestion job</td>
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
<tr id="parameter-library_arn">
    <td><CopyableCode code="library_arn" /></td>
    <td><code>string</code></td>
    <td>ARN generated at the server side when a DataAutomationLibrary is created</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_automation_library"
    values={[
        { label: 'get_data_automation_library', value: 'get_data_automation_library' },
        { label: 'list_data_automation_libraries', value: 'list_data_automation_libraries' }
    ]}
>
<TabItem value="get_data_automation_library">

Gets an existing Amazon Bedrock Data Automation Library

```sql
SELECT
creation_time,
entity_types,
kms_encryption_context,
kms_key_id,
library_arn,
library_description,
library_name,
status
FROM aws.bedrock_data_automation.data_automation_libraries
WHERE library_arn = '{{ library_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_automation_libraries">

Lists all existing Amazon Bedrock Data Automation Libraries

```sql
SELECT
creation_time,
library_arn,
library_name
FROM aws.bedrock_data_automation.data_automation_libraries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_automation_library"
    values={[
        { label: 'create_data_automation_library', value: 'create_data_automation_library' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_automation_library">

Creates an Amazon Bedrock Data Automation Library

```sql
INSERT INTO aws.bedrock_data_automation.data_automation_libraries (
libraryName,
libraryDescription,
clientToken,
encryptionConfiguration,
tags,
region
)
SELECT 
'{{ libraryName }}' /* required */,
'{{ libraryDescription }}',
'{{ clientToken }}',
'{{ encryptionConfiguration }}',
'{{ tags }}',
'{{ region }}'
RETURNING
library_arn,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_automation_libraries
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_automation_libraries resource.
    - name: libraryName
      value: "{{ libraryName }}"
      description: |
        Name of the DataAutomationLibrary
    - name: libraryDescription
      value: "{{ libraryDescription }}"
      description: |
        Description of the DataAutomationLibrary
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
    defaultValue="update_data_automation_library"
    values={[
        { label: 'update_data_automation_library', value: 'update_data_automation_library' }
    ]}
>
<TabItem value="update_data_automation_library">

Updates an existing Amazon Bedrock Data Automation Library

```sql
UPDATE aws.bedrock_data_automation.data_automation_libraries
SET 
libraryDescription = '{{ libraryDescription }}',
clientToken = '{{ clientToken }}'
WHERE 
library_arn = '{{ library_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
library_arn,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_automation_library"
    values={[
        { label: 'delete_data_automation_library', value: 'delete_data_automation_library' }
    ]}
>
<TabItem value="delete_data_automation_library">

Deletes an existing Amazon Bedrock Data Automation Library

```sql
DELETE FROM aws.bedrock_data_automation.data_automation_libraries
WHERE library_arn = '{{ library_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="invoke_data_automation_library_ingestion_job"
    values={[
        { label: 'invoke_data_automation_library_ingestion_job', value: 'invoke_data_automation_library_ingestion_job' }
    ]}
>
<TabItem value="invoke_data_automation_library_ingestion_job">

Async API: Invoke data automation library ingestion job

```sql
EXEC aws.bedrock_data_automation.data_automation_libraries.invoke_data_automation_library_ingestion_job 
@library_arn='{{ library_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}", 
"inputConfiguration": "{{ inputConfiguration }}", 
"entityType": "{{ entityType }}", 
"operationType": "{{ operationType }}", 
"outputConfiguration": "{{ outputConfiguration }}", 
"notificationConfiguration": "{{ notificationConfiguration }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
</Tabs>
