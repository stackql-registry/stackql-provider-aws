--- 
title: anomaly_detectors
hide_title: false
hide_table_of_contents: false
keywords:
  - anomaly_detectors
  - amp
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

Creates, updates, deletes, gets or lists an <code>anomaly_detectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="anomaly_detectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amp.anomaly_detectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_anomaly_detector"
    values={[
        { label: 'describe_anomaly_detector', value: 'describe_anomaly_detector' },
        { label: 'list_anomaly_detectors', value: 'list_anomaly_detectors' }
    ]}
>
<TabItem value="describe_anomaly_detector">

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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of the anomaly detector. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#91;-.0-9A-Z_a-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="anomalyDetectorId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the anomaly detector. (pattern: &lt;code&gt;ad-&#91;0-9A-Za-z&#93;&#91;-.0-9A-Z_a-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the anomaly detector. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:aps:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:anomalydetector/ws-.+/ad-.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for the anomaly detection algorithm.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the anomaly detector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationIntervalInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The frequency, in seconds, at which the anomaly detector evaluates metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The Amazon Managed Service for Prometheus metric labels associated with the anomaly detector.</td>
</tr>
<tr>
    <td><CopyableCode code="missingDataAction" /></td>
    <td><code>object</code></td>
    <td>Specifies the action to take when data is missing during anomaly detection evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the anomaly detector was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the anomaly detector.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags applied to the anomaly detector.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_anomaly_detectors">

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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of the anomaly detector. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#91;-.0-9A-Z_a-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="anomalyDetectorId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the anomaly detector. (pattern: &lt;code&gt;ad-&#91;0-9A-Za-z&#93;&#91;-.0-9A-Z_a-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the anomaly detector. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:aps:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:anomalydetector/ws-.+/ad-.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the anomaly detector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the anomaly detector was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the anomaly detector.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags applied to the anomaly detector.</td>
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
    <td><a href="#describe_anomaly_detector"><CopyableCode code="describe_anomaly_detector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-anomaly_detector_id"><code>anomaly_detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific anomaly detector, including its status and configuration.</td>
</tr>
<tr>
    <td><a href="#list_anomaly_detectors"><CopyableCode code="list_anomaly_detectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-alias"><code>alias</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a paginated list of anomaly detectors for a workspace with optional filtering by alias.</td>
</tr>
<tr>
    <td><a href="#create_anomaly_detector"><CopyableCode code="create_anomaly_detector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-alias"><code>alias</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Creates an anomaly detector within a workspace using the Random Cut Forest algorithm for time-series analysis. The anomaly detector analyzes Amazon Managed Service for Prometheus metrics to identify unusual patterns and behaviors.</td>
</tr>
<tr>
    <td><a href="#put_anomaly_detector"><CopyableCode code="put_anomaly_detector" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-anomaly_detector_id"><code>anomaly_detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>When you call PutAnomalyDetector, the operation creates a new anomaly detector if one doesn't exist, or updates an existing one. Each call to this operation triggers a complete retraining of the detector, which includes querying the minimum required samples and backfilling the detector with historical data. This process occurs regardless of whether you're making a minor change like updating the evaluation interval or making more substantial modifications. The operation serves as the single method for creating, updating, and retraining anomaly detectors.</td>
</tr>
<tr>
    <td><a href="#delete_anomaly_detector"><CopyableCode code="delete_anomaly_detector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-anomaly_detector_id"><code>anomaly_detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Removes an anomaly detector from a workspace. This operation is idempotent.</td>
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
<tr id="parameter-anomaly_detector_id">
    <td><CopyableCode code="anomaly_detector_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the anomaly detector to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the workspace containing the anomaly detector to delete.</td>
</tr>
<tr id="parameter-alias">
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>Filters the results to anomaly detectors with the specified alias.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. Valid range is 1 to 1000.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token to continue retrieving results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_anomaly_detector"
    values={[
        { label: 'describe_anomaly_detector', value: 'describe_anomaly_detector' },
        { label: 'list_anomaly_detectors', value: 'list_anomaly_detectors' }
    ]}
>
<TabItem value="describe_anomaly_detector">

Retrieves detailed information about a specific anomaly detector, including its status and configuration.

```sql
SELECT
alias,
anomalyDetectorId,
arn,
configuration,
createdAt,
evaluationIntervalInSeconds,
labels,
missingDataAction,
modifiedAt,
status,
tags
FROM aws.amp.anomaly_detectors
WHERE workspace_id = '{{ workspace_id }}' -- required
AND anomaly_detector_id = '{{ anomaly_detector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_anomaly_detectors">

Returns a paginated list of anomaly detectors for a workspace with optional filtering by alias.

```sql
SELECT
alias,
anomalyDetectorId,
arn,
createdAt,
modifiedAt,
status,
tags
FROM aws.amp.anomaly_detectors
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
AND alias = '{{ alias }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_anomaly_detector"
    values={[
        { label: 'create_anomaly_detector', value: 'create_anomaly_detector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_anomaly_detector">

Creates an anomaly detector within a workspace using the Random Cut Forest algorithm for time-series analysis. The anomaly detector analyzes Amazon Managed Service for Prometheus metrics to identify unusual patterns and behaviors.

```sql
INSERT INTO aws.amp.anomaly_detectors (
alias,
evaluationIntervalInSeconds,
missingDataAction,
configuration,
labels,
clientToken,
tags,
workspace_id,
region
)
SELECT 
'{{ alias }}' /* required */,
{{ evaluationIntervalInSeconds }},
'{{ missingDataAction }}',
'{{ configuration }}' /* required */,
'{{ labels }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ workspace_id }}',
'{{ region }}'
RETURNING
anomalyDetectorId,
arn,
status,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: anomaly_detectors
  props:
    - name: workspace_id
      value: "{{ workspace_id }}"
      description: Required parameter for the anomaly_detectors resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the anomaly_detectors resource.
    - name: alias
      value: "{{ alias }}"
    - name: evaluationIntervalInSeconds
      value: {{ evaluationIntervalInSeconds }}
    - name: missingDataAction
      description: |
        Specifies the action to take when data is missing during anomaly detection evaluation.
      value:
        markAsAnomaly: {{ markAsAnomaly }}
        skip: {{ skip }}
    - name: configuration
      description: |
        The configuration for the anomaly detection algorithm.
      value:
        randomCutForest:
          query: "{{ query }}"
          shingleSize: {{ shingleSize }}
          sampleSize: {{ sampleSize }}
          ignoreNearExpectedFromAbove:
            amount: {{ amount }}
            ratio: {{ ratio }}
          ignoreNearExpectedFromBelow:
            amount: {{ amount }}
            ratio: {{ ratio }}
    - name: labels
      value: "{{ labels }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        An identifier used to ensure the idempotency of a write request.
    - name: tags
      value: "{{ tags }}"
      description: |
        A tag associated with a resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_anomaly_detector"
    values={[
        { label: 'put_anomaly_detector', value: 'put_anomaly_detector' }
    ]}
>
<TabItem value="put_anomaly_detector">

When you call PutAnomalyDetector, the operation creates a new anomaly detector if one doesn't exist, or updates an existing one. Each call to this operation triggers a complete retraining of the detector, which includes querying the minimum required samples and backfilling the detector with historical data. This process occurs regardless of whether you're making a minor change like updating the evaluation interval or making more substantial modifications. The operation serves as the single method for creating, updating, and retraining anomaly detectors.

```sql
REPLACE aws.amp.anomaly_detectors
SET 
evaluationIntervalInSeconds = {{ evaluationIntervalInSeconds }},
missingDataAction = '{{ missingDataAction }}',
configuration = '{{ configuration }}',
labels = '{{ labels }}',
clientToken = '{{ clientToken }}'
WHERE 
workspace_id = '{{ workspace_id }}' --required
AND anomaly_detector_id = '{{ anomaly_detector_id }}' --required
AND region = '{{ region }}' --required
AND configuration = '{{ configuration }}' --required
RETURNING
anomalyDetectorId,
arn,
status,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_anomaly_detector"
    values={[
        { label: 'delete_anomaly_detector', value: 'delete_anomaly_detector' }
    ]}
>
<TabItem value="delete_anomaly_detector">

Removes an anomaly detector from a workspace. This operation is idempotent.

```sql
DELETE FROM aws.amp.anomaly_detectors
WHERE workspace_id = '{{ workspace_id }}' --required
AND anomaly_detector_id = '{{ anomaly_detector_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
