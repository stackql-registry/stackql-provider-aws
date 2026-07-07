--- 
title: detector_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - detector_versions
  - frauddetector
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

Creates, updates, deletes, gets or lists a <code>detector_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="detector_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.frauddetector.detector_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_detector_version"
    values={[
        { label: 'get_detector_version', value: 'get_detector_version' }
    ]}
>
<TabItem value="get_detector_version">

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
    <td>The detector version ARN. (pattern: &lt;code&gt;^arn\:aws&#91;a-z-&#93;&#123;0,15&#125;\:frauddetector\:&#91;a-z0-9-&#93;&#123;3,20&#125;\:&#91;0-9&#93;&#123;12&#125;\:&#91;^\s&#93;&#123;2,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the detector version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The detector version description.</td>
</tr>
<tr>
    <td><CopyableCode code="detectorId" /></td>
    <td><code>string</code></td>
    <td>The detector ID. (pattern: &lt;code&gt;^&#91;0-9a-z_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="detectorVersionId" /></td>
    <td><code>string</code></td>
    <td>The detector version ID. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="externalModelEndpoints" /></td>
    <td><code>array</code></td>
    <td>The Amazon SageMaker model endpoints included in the detector version.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTime" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the detector version was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="modelVersions" /></td>
    <td><code>array</code></td>
    <td>The model versions included in the detector version.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleExecutionMode" /></td>
    <td><code>string</code></td>
    <td>The execution mode of the rule in the dectector FIRST_MATCHED indicates that Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule. ALL_MATCHED indicates that Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. You can define and edit the rule mode at the detector version level, when it is in draft status. (ALL_MATCHED, FIRST_MATCHED)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>The rules included in the detector version.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the detector version. (DRAFT, ACTIVE, INACTIVE)</td>
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
    <td><a href="#get_detector_version"><CopyableCode code="get_detector_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a particular detector version.</td>
</tr>
<tr>
    <td><a href="#create_detector_version"><CopyableCode code="create_detector_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-detectorId"><code>detectorId</code></a>, <a href="#parameter-rules"><code>rules</code></a></td>
    <td></td>
    <td>Creates a detector version. The detector version starts in a DRAFT status.</td>
</tr>
<tr>
    <td><a href="#update_detector_version"><CopyableCode code="update_detector_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-detectorId"><code>detectorId</code></a>, <a href="#parameter-detectorVersionId"><code>detectorVersionId</code></a>, <a href="#parameter-externalModelEndpoints"><code>externalModelEndpoints</code></a>, <a href="#parameter-rules"><code>rules</code></a></td>
    <td></td>
    <td>Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, rule execution mode, and description. You can only update a DRAFT detector version.</td>
</tr>
<tr>
    <td><a href="#update_detector_version_metadata"><CopyableCode code="update_detector_version_metadata" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-detectorId"><code>detectorId</code></a>, <a href="#parameter-detectorVersionId"><code>detectorVersionId</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td></td>
    <td>Updates the detector version's description. You can update the metadata for any detector version (DRAFT, ACTIVE, or INACTIVE).</td>
</tr>
<tr>
    <td><a href="#update_detector_version_status"><CopyableCode code="update_detector_version_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-detectorId"><code>detectorId</code></a>, <a href="#parameter-detectorVersionId"><code>detectorVersionId</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Updates the detector version’s status. You can perform the following promotions or demotions using UpdateDetectorVersionStatus: DRAFT to ACTIVE, ACTIVE to INACTIVE, and INACTIVE to ACTIVE.</td>
</tr>
<tr>
    <td><a href="#delete_detector_version"><CopyableCode code="delete_detector_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the detector version. You cannot delete detector versions that are in ACTIVE status. When you delete a detector version, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_detector_version"
    values={[
        { label: 'get_detector_version', value: 'get_detector_version' }
    ]}
>
<TabItem value="get_detector_version">

Gets a particular detector version.

```sql
SELECT
arn,
createdTime,
description,
detectorId,
detectorVersionId,
externalModelEndpoints,
lastUpdatedTime,
modelVersions,
ruleExecutionMode,
rules,
status
FROM aws.frauddetector.detector_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_detector_version"
    values={[
        { label: 'create_detector_version', value: 'create_detector_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_detector_version">

Creates a detector version. The detector version starts in a DRAFT status.

```sql
INSERT INTO aws.frauddetector.detector_versions (
detectorId,
description,
externalModelEndpoints,
rules,
modelVersions,
ruleExecutionMode,
tags,
region
)
SELECT 
'{{ detectorId }}' /* required */,
'{{ description }}',
'{{ externalModelEndpoints }}',
'{{ rules }}' /* required */,
'{{ modelVersions }}',
'{{ ruleExecutionMode }}',
'{{ tags }}',
'{{ region }}'
RETURNING
detectorId,
detectorVersionId,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: detector_versions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the detector_versions resource.
    - name: detectorId
      value: "{{ detectorId }}"
      description: |
        The ID of the detector under which you want to create a new version.
    - name: description
      value: "{{ description }}"
      description: |
        The description of the detector version.
    - name: externalModelEndpoints
      value:
        - "{{ externalModelEndpoints }}"
      description: |
        The Amazon Sagemaker model endpoints to include in the detector version.
    - name: rules
      description: |
        The rules to include in the detector version.
      value:
        - detectorId: "{{ detectorId }}"
          ruleId: "{{ ruleId }}"
          ruleVersion: "{{ ruleVersion }}"
    - name: modelVersions
      description: |
        The model versions to include in the detector version.
      value:
        - modelId: "{{ modelId }}"
          modelType: "{{ modelType }}"
          modelVersionNumber: "{{ modelVersionNumber }}"
          arn: "{{ arn }}"
    - name: ruleExecutionMode
      value: "{{ ruleExecutionMode }}"
      description: |
        The rule execution mode for the rules included in the detector version. You can define and edit the rule mode at the detector version level, when it is in draft status. If you specify FIRST_MATCHED, Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule. If you specifiy ALL_MATCHED, Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. The default behavior is FIRST_MATCHED.
      valid_values: ['ALL_MATCHED', 'FIRST_MATCHED']
    - name: tags
      description: |
        A collection of key and value pairs.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_detector_version"
    values={[
        { label: 'update_detector_version', value: 'update_detector_version' },
        { label: 'update_detector_version_metadata', value: 'update_detector_version_metadata' },
        { label: 'update_detector_version_status', value: 'update_detector_version_status' }
    ]}
>
<TabItem value="update_detector_version">

Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, rule execution mode, and description. You can only update a DRAFT detector version.

```sql
UPDATE aws.frauddetector.detector_versions
SET 
detectorId = '{{ detectorId }}',
detectorVersionId = '{{ detectorVersionId }}',
externalModelEndpoints = '{{ externalModelEndpoints }}',
rules = '{{ rules }}',
description = '{{ description }}',
modelVersions = '{{ modelVersions }}',
ruleExecutionMode = '{{ ruleExecutionMode }}'
WHERE 
region = '{{ region }}' --required
AND detectorId = '{{ detectorId }}' --required
AND detectorVersionId = '{{ detectorVersionId }}' --required
AND externalModelEndpoints = '{{ externalModelEndpoints }}' --required
AND rules = '{{ rules }}' --required;
```
</TabItem>
<TabItem value="update_detector_version_metadata">

Updates the detector version's description. You can update the metadata for any detector version (DRAFT, ACTIVE, or INACTIVE).

```sql
UPDATE aws.frauddetector.detector_versions
SET 
detectorId = '{{ detectorId }}',
detectorVersionId = '{{ detectorVersionId }}',
description = '{{ description }}'
WHERE 
region = '{{ region }}' --required
AND detectorId = '{{ detectorId }}' --required
AND detectorVersionId = '{{ detectorVersionId }}' --required
AND description = '{{ description }}' --required;
```
</TabItem>
<TabItem value="update_detector_version_status">

Updates the detector version’s status. You can perform the following promotions or demotions using UpdateDetectorVersionStatus: DRAFT to ACTIVE, ACTIVE to INACTIVE, and INACTIVE to ACTIVE.

```sql
UPDATE aws.frauddetector.detector_versions
SET 
detectorId = '{{ detectorId }}',
detectorVersionId = '{{ detectorVersionId }}',
status = '{{ status }}'
WHERE 
region = '{{ region }}' --required
AND detectorId = '{{ detectorId }}' --required
AND detectorVersionId = '{{ detectorVersionId }}' --required
AND status = '{{ status }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_detector_version"
    values={[
        { label: 'delete_detector_version', value: 'delete_detector_version' }
    ]}
>
<TabItem value="delete_detector_version">

Deletes the detector version. You cannot delete detector versions that are in ACTIVE status. When you delete a detector version, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.

```sql
DELETE FROM aws.frauddetector.detector_versions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
