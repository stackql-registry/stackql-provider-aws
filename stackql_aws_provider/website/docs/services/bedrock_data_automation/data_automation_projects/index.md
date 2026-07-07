--- 
title: data_automation_projects
hide_title: false
hide_table_of_contents: false
keywords:
  - data_automation_projects
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

Creates, updates, deletes, gets or lists a <code>data_automation_projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_automation_projects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_data_automation.data_automation_projects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_automation_project"
    values={[
        { label: 'get_data_automation_project', value: 'get_data_automation_project' },
        { label: 'list_data_automation_projects', value: 'list_data_automation_projects' }
    ]}
>
<TabItem value="get_data_automation_project">

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
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time Stamp</td>
</tr>
<tr>
    <td><CopyableCode code="customOutputConfiguration" /></td>
    <td><code>object</code></td>
    <td>Custom output configuration</td>
</tr>
<tr>
    <td><CopyableCode code="dataAutomationLibraryConfiguration" /></td>
    <td><code>object</code></td>
    <td>DataAutomation Library configuration</td>
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
    <td><CopyableCode code="overrideConfiguration" /></td>
    <td><code>object</code></td>
    <td>Override configuration</td>
</tr>
<tr>
    <td><CopyableCode code="projectArn" /></td>
    <td><code>string</code></td>
    <td>ARN of a DataAutomationProject (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):bedrock:&#91;a-zA-Z0-9-&#93;*:(aws|&#91;0-9&#93;&#123;12&#125;):data-automation-project/&#91;a-zA-Z0-9-&#93;&#123;12,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="projectDescription" /></td>
    <td><code>string</code></td>
    <td>Description of the DataAutomationProject</td>
</tr>
<tr>
    <td><CopyableCode code="projectName" /></td>
    <td><code>string</code></td>
    <td>Name of the DataAutomationProject (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="projectStage" /></td>
    <td><code>string</code></td>
    <td>Stage of the Project (DEVELOPMENT, LIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="projectType" /></td>
    <td><code>string</code></td>
    <td>Type of the DataAutomationProject (ASYNC, SYNC)</td>
</tr>
<tr>
    <td><CopyableCode code="standardOutputConfiguration" /></td>
    <td><code>object</code></td>
    <td>Standard output configuration</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of Data Automation Project (COMPLETED, IN_PROGRESS, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_automation_projects">

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
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time Stamp</td>
</tr>
<tr>
    <td><CopyableCode code="projectArn" /></td>
    <td><code>string</code></td>
    <td>ARN of a DataAutomationProject (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):bedrock:&#91;a-zA-Z0-9-&#93;*:(aws|&#91;0-9&#93;&#123;12&#125;):data-automation-project/&#91;a-zA-Z0-9-&#93;&#123;12,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="projectName" /></td>
    <td><code>string</code></td>
    <td>Name of the DataAutomationProject (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="projectStage" /></td>
    <td><code>string</code></td>
    <td>Stage of the Project (DEVELOPMENT, LIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="projectType" /></td>
    <td><code>string</code></td>
    <td>Type of the DataAutomationProject (ASYNC, SYNC)</td>
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
    <td><a href="#get_data_automation_project"><CopyableCode code="get_data_automation_project" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_arn"><code>project_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an existing Amazon Bedrock Data Automation Project</td>
</tr>
<tr>
    <td><a href="#list_data_automation_projects"><CopyableCode code="list_data_automation_projects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all existing Amazon Bedrock Data Automation Projects</td>
</tr>
<tr>
    <td><a href="#create_data_automation_project"><CopyableCode code="create_data_automation_project" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-projectName"><code>projectName</code></a>, <a href="#parameter-standardOutputConfiguration"><code>standardOutputConfiguration</code></a></td>
    <td></td>
    <td>Creates an Amazon Bedrock Data Automation Project</td>
</tr>
<tr>
    <td><a href="#update_data_automation_project"><CopyableCode code="update_data_automation_project" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project_arn"><code>project_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-standardOutputConfiguration"><code>standardOutputConfiguration</code></a></td>
    <td></td>
    <td>Updates an existing Amazon Bedrock Data Automation Project</td>
</tr>
<tr>
    <td><a href="#delete_data_automation_project"><CopyableCode code="delete_data_automation_project" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_arn"><code>project_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing Amazon Bedrock Data Automation Project</td>
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
<tr id="parameter-project_arn">
    <td><CopyableCode code="project_arn" /></td>
    <td><code>string</code></td>
    <td>ARN generated at the server side when a DataAutomationProject is created</td>
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
    defaultValue="get_data_automation_project"
    values={[
        { label: 'get_data_automation_project', value: 'get_data_automation_project' },
        { label: 'list_data_automation_projects', value: 'list_data_automation_projects' }
    ]}
>
<TabItem value="get_data_automation_project">

Gets an existing Amazon Bedrock Data Automation Project

```sql
SELECT
creationTime,
customOutputConfiguration,
dataAutomationLibraryConfiguration,
kmsEncryptionContext,
kmsKeyId,
lastModifiedTime,
overrideConfiguration,
projectArn,
projectDescription,
projectName,
projectStage,
projectType,
standardOutputConfiguration,
status
FROM aws.bedrock_data_automation.data_automation_projects
WHERE project_arn = '{{ project_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_automation_projects">

Lists all existing Amazon Bedrock Data Automation Projects

```sql
SELECT
creationTime,
projectArn,
projectName,
projectStage,
projectType
FROM aws.bedrock_data_automation.data_automation_projects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_automation_project"
    values={[
        { label: 'create_data_automation_project', value: 'create_data_automation_project' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_automation_project">

Creates an Amazon Bedrock Data Automation Project

```sql
INSERT INTO aws.bedrock_data_automation.data_automation_projects (
projectName,
projectDescription,
projectStage,
projectType,
standardOutputConfiguration,
customOutputConfiguration,
overrideConfiguration,
dataAutomationLibraryConfiguration,
clientToken,
encryptionConfiguration,
tags,
region
)
SELECT 
'{{ projectName }}' /* required */,
'{{ projectDescription }}',
'{{ projectStage }}',
'{{ projectType }}',
'{{ standardOutputConfiguration }}' /* required */,
'{{ customOutputConfiguration }}',
'{{ overrideConfiguration }}',
'{{ dataAutomationLibraryConfiguration }}',
'{{ clientToken }}',
'{{ encryptionConfiguration }}',
'{{ tags }}',
'{{ region }}'
RETURNING
projectArn,
projectStage,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_automation_projects
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_automation_projects resource.
    - name: projectName
      value: "{{ projectName }}"
      description: |
        Name of the DataAutomationProject
    - name: projectDescription
      value: "{{ projectDescription }}"
      description: |
        Description of the DataAutomationProject
    - name: projectStage
      value: "{{ projectStage }}"
      description: |
        Stage of the Project
      valid_values: ['DEVELOPMENT', 'LIVE']
    - name: projectType
      value: "{{ projectType }}"
      description: |
        Type of the DataAutomationProject
      valid_values: ['ASYNC', 'SYNC']
    - name: standardOutputConfiguration
      description: |
        Standard output configuration
      value:
        document:
          extraction:
            granularity:
              types:
                - "{{ types }}"
            boundingBox:
              state: "{{ state }}"
          generativeField:
            state: "{{ state }}"
          outputFormat:
            textFormat:
              types:
                - "{{ types }}"
            additionalFileFormat:
              state: "{{ state }}"
        image:
          extraction:
            category:
              state: "{{ state }}"
              types:
                - "{{ types }}"
            boundingBox:
              state: "{{ state }}"
          generativeField:
            state: "{{ state }}"
            types:
              - "{{ types }}"
        video:
          extraction:
            category:
              state: "{{ state }}"
              types:
                - "{{ types }}"
            boundingBox:
              state: "{{ state }}"
          generativeField:
            state: "{{ state }}"
            types:
              - "{{ types }}"
        audio:
          extraction:
            category:
              state: "{{ state }}"
              types:
                - "{{ types }}"
              typeConfiguration:
                transcript: "{{ transcript }}"
          generativeField:
            state: "{{ state }}"
            types:
              - "{{ types }}"
    - name: customOutputConfiguration
      description: |
        Custom output configuration
      value:
        blueprints:
          - blueprintArn: "{{ blueprintArn }}"
            blueprintVersion: "{{ blueprintVersion }}"
            blueprintStage: "{{ blueprintStage }}"
    - name: overrideConfiguration
      description: |
        Override configuration
      value:
        document:
          splitter:
            state: "{{ state }}"
          modalityProcessing:
            state: "{{ state }}"
          sensitiveDataConfiguration:
            detectionMode: "{{ detectionMode }}"
            detectionScope:
              - "{{ detectionScope }}"
            piiEntitiesConfiguration:
              piiEntityTypes:
                - "{{ piiEntityTypes }}"
              redactionMaskMode: "{{ redactionMaskMode }}"
        image:
          modalityProcessing:
            state: "{{ state }}"
          sensitiveDataConfiguration:
            detectionMode: "{{ detectionMode }}"
            detectionScope:
              - "{{ detectionScope }}"
            piiEntitiesConfiguration:
              piiEntityTypes:
                - "{{ piiEntityTypes }}"
              redactionMaskMode: "{{ redactionMaskMode }}"
        video:
          modalityProcessing:
            state: "{{ state }}"
          sensitiveDataConfiguration:
            detectionMode: "{{ detectionMode }}"
            detectionScope:
              - "{{ detectionScope }}"
            piiEntitiesConfiguration:
              piiEntityTypes:
                - "{{ piiEntityTypes }}"
              redactionMaskMode: "{{ redactionMaskMode }}"
        audio:
          modalityProcessing:
            state: "{{ state }}"
          languageConfiguration:
            inputLanguages:
              - "{{ inputLanguages }}"
            generativeOutputLanguage: "{{ generativeOutputLanguage }}"
            identifyMultipleLanguages: {{ identifyMultipleLanguages }}
          sensitiveDataConfiguration:
            detectionMode: "{{ detectionMode }}"
            detectionScope:
              - "{{ detectionScope }}"
            piiEntitiesConfiguration:
              piiEntityTypes:
                - "{{ piiEntityTypes }}"
              redactionMaskMode: "{{ redactionMaskMode }}"
        modalityRouting:
          jpeg: "{{ jpeg }}"
          png: "{{ png }}"
          mp4: "{{ mp4 }}"
          mov: "{{ mov }}"
    - name: dataAutomationLibraryConfiguration
      description: |
        DataAutomation Library configuration
      value:
        libraries:
          - libraryArn: "{{ libraryArn }}"
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
    defaultValue="update_data_automation_project"
    values={[
        { label: 'update_data_automation_project', value: 'update_data_automation_project' }
    ]}
>
<TabItem value="update_data_automation_project">

Updates an existing Amazon Bedrock Data Automation Project

```sql
UPDATE aws.bedrock_data_automation.data_automation_projects
SET 
projectStage = '{{ projectStage }}',
projectDescription = '{{ projectDescription }}',
standardOutputConfiguration = '{{ standardOutputConfiguration }}',
customOutputConfiguration = '{{ customOutputConfiguration }}',
overrideConfiguration = '{{ overrideConfiguration }}',
dataAutomationLibraryConfiguration = '{{ dataAutomationLibraryConfiguration }}',
encryptionConfiguration = '{{ encryptionConfiguration }}'
WHERE 
project_arn = '{{ project_arn }}' --required
AND region = '{{ region }}' --required
AND standardOutputConfiguration = '{{ standardOutputConfiguration }}' --required
RETURNING
projectArn,
projectStage,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_automation_project"
    values={[
        { label: 'delete_data_automation_project', value: 'delete_data_automation_project' }
    ]}
>
<TabItem value="delete_data_automation_project">

Deletes an existing Amazon Bedrock Data Automation Project

```sql
DELETE FROM aws.bedrock_data_automation.data_automation_projects
WHERE project_arn = '{{ project_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
