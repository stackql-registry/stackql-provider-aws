--- 
title: detector_models
hide_title: false
hide_table_of_contents: false
keywords:
  - detector_models
  - iotevents
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

Creates, updates, deletes, gets or lists a <code>detector_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="detector_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotevents.detector_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_detector_model"
    values={[
        { label: 'describe_detector_model', value: 'describe_detector_model' },
        { label: 'list_detector_models', value: 'list_detector_models' }
    ]}
>
<TabItem value="describe_detector_model">

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
    <td><CopyableCode code="detectorModelConfiguration" /></td>
    <td><code>object</code></td>
    <td>Information about how the detector is configured.</td>
</tr>
<tr>
    <td><CopyableCode code="detectorModelDefinition" /></td>
    <td><code>object</code></td>
    <td>Information that defines how a detector operates.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_detector_models">

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
    <td><CopyableCode code="detectorModelSummaries" /></td>
    <td><code>array</code></td>
    <td>Summary information about the detector models.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that you can use to return the next set of results, or null if there are no more results.</td>
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
    <td><a href="#describe_detector_model"><CopyableCode code="describe_detector_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_model_name"><code>detector_model_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Describes a detector model. If the version parameter is not specified, information about the latest version is returned.</td>
</tr>
<tr>
    <td><a href="#list_detector_models"><CopyableCode code="list_detector_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the detector models you have created. Only the metadata associated with each detector model is returned.</td>
</tr>
<tr>
    <td><a href="#create_detector_model"><CopyableCode code="create_detector_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-detectorModelName"><code>detectorModelName</code></a>, <a href="#parameter-detectorModelDefinition"><code>detectorModelDefinition</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates a detector model.</td>
</tr>
<tr>
    <td><a href="#update_detector_model"><CopyableCode code="update_detector_model" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-detector_model_name"><code>detector_model_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-detectorModelDefinition"><code>detectorModelDefinition</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.</td>
</tr>
<tr>
    <td><a href="#delete_detector_model"><CopyableCode code="delete_detector_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-detector_model_name"><code>detector_model_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a detector model. Any active instances of the detector model are also deleted.</td>
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
<tr id="parameter-detector_model_name">
    <td><CopyableCode code="detector_model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the detector model to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that you can use to return the next set of results.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the detector model.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_detector_model"
    values={[
        { label: 'describe_detector_model', value: 'describe_detector_model' },
        { label: 'list_detector_models', value: 'list_detector_models' }
    ]}
>
<TabItem value="describe_detector_model">

Describes a detector model. If the version parameter is not specified, information about the latest version is returned.

```sql
SELECT
detectorModelConfiguration,
detectorModelDefinition
FROM aws.iotevents.detector_models
WHERE detector_model_name = '{{ detector_model_name }}' -- required
AND region = '{{ region }}' -- required
AND version = '{{ version }}'
;
```
</TabItem>
<TabItem value="list_detector_models">

Lists the detector models you have created. Only the metadata associated with each detector model is returned.

```sql
SELECT
detectorModelSummaries,
nextToken
FROM aws.iotevents.detector_models
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_detector_model"
    values={[
        { label: 'create_detector_model', value: 'create_detector_model' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_detector_model">

Creates a detector model.

```sql
INSERT INTO aws.iotevents.detector_models (
detectorModelName,
detectorModelDefinition,
detectorModelDescription,
key,
roleArn,
tags,
evaluationMethod,
region
)
SELECT 
'{{ detectorModelName }}' /* required */,
'{{ detectorModelDefinition }}' /* required */,
'{{ detectorModelDescription }}',
'{{ key }}',
'{{ roleArn }}' /* required */,
'{{ tags }}',
'{{ evaluationMethod }}',
'{{ region }}'
RETURNING
detectorModelConfiguration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: detector_models
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the detector_models resource.
    - name: detectorModelName
      value: "{{ detectorModelName }}"
    - name: detectorModelDefinition
      description: |
        Information that defines how a detector operates.
      value:
        states:
          - stateName: "{{ stateName }}"
            onInput:
              events:
                - eventName: "{{ eventName }}"
                  condition: "{{ condition }}"
                  actions: "{{ actions }}"
              transitionEvents:
                - eventName: "{{ eventName }}"
                  condition: "{{ condition }}"
                  actions: "{{ actions }}"
                  nextState: "{{ nextState }}"
            onEnter:
              events:
                - eventName: "{{ eventName }}"
                  condition: "{{ condition }}"
                  actions: "{{ actions }}"
            onExit:
              events:
                - eventName: "{{ eventName }}"
                  condition: "{{ condition }}"
                  actions: "{{ actions }}"
        initialStateName: "{{ initialStateName }}"
    - name: detectorModelDescription
      value: "{{ detectorModelDescription }}"
    - name: key
      value: "{{ key }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: evaluationMethod
      value: "{{ evaluationMethod }}"
      valid_values: ['BATCH', 'SERIAL']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_detector_model"
    values={[
        { label: 'update_detector_model', value: 'update_detector_model' }
    ]}
>
<TabItem value="update_detector_model">

Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.

```sql
UPDATE aws.iotevents.detector_models
SET 
detectorModelDefinition = '{{ detectorModelDefinition }}',
detectorModelDescription = '{{ detectorModelDescription }}',
roleArn = '{{ roleArn }}',
evaluationMethod = '{{ evaluationMethod }}'
WHERE 
detector_model_name = '{{ detector_model_name }}' --required
AND region = '{{ region }}' --required
AND detectorModelDefinition = '{{ detectorModelDefinition }}' --required
AND roleArn = '{{ roleArn }}' --required
RETURNING
detectorModelConfiguration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_detector_model"
    values={[
        { label: 'delete_detector_model', value: 'delete_detector_model' }
    ]}
>
<TabItem value="delete_detector_model">

Deletes a detector model. Any active instances of the detector model are also deleted.

```sql
DELETE FROM aws.iotevents.detector_models
WHERE detector_model_name = '{{ detector_model_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
