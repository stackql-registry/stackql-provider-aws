--- 
title: what_if_analysis
hide_title: false
hide_table_of_contents: false
keywords:
  - what_if_analysis
  - forecast
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

Creates, updates, deletes, gets or lists a <code>what_if_analysis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="what_if_analysis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecast.what_if_analysis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_what_if_analysis"
    values={[
        { label: 'describe_what_if_analysis', value: 'describe_what_if_analysis' }
    ]}
>
<TabItem value="describe_what_if_analysis">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the what-if analysis was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EstimatedTimeRemainingInMinutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The approximate time remaining to complete the what-if analysis, in minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="ForecastArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the what-if forecast. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>If an error occurred, an informational message about the error.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the what-if analysis. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the what-if analysis must be ACTIVE before you can access the analysis. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TimeSeriesSelector" /></td>
    <td><code>object</code></td>
    <td>Defines the set of time series that are used to create the forecasts in a TimeSeriesIdentifiers object. The TimeSeriesIdentifiers object needs the following information: DataSource Format Schema</td>
</tr>
<tr>
    <td><CopyableCode code="WhatIfAnalysisArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the what-if analysis. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WhatIfAnalysisName" /></td>
    <td><code>string</code></td>
    <td>The name of the what-if analysis. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_what_if_analysis"><CopyableCode code="describe_what_if_analysis" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the what-if analysis created using the CreateWhatIfAnalysis operation. In addition to listing the properties provided in the CreateWhatIfAnalysis request, this operation lists the following properties: CreationTime LastModificationTime Message - If an error occurred, information about the error. Status</td>
</tr>
<tr>
    <td><a href="#create_what_if_analysis"><CopyableCode code="create_what_if_analysis" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WhatIfAnalysisName"><code>WhatIfAnalysisName</code></a>, <a href="#parameter-ForecastArn"><code>ForecastArn</code></a></td>
    <td></td>
    <td>What-if analysis is a scenario modeling technique where you make a hypothetical change to a time series and compare the forecasts generated by these changes against the baseline, unchanged time series. It is important to remember that the purpose of a what-if analysis is to understand how a forecast can change given different modifications to the baseline time series. For example, imagine you are a clothing retailer who is considering an end of season sale to clear space for new styles. After creating a baseline forecast, you can use a what-if analysis to investigate how different sales tactics might affect your goals. You could create a scenario where everything is given a 25% markdown, and another where everything is given a fixed dollar markdown. You could create a scenario where the sale lasts for one week and another where the sale lasts for one month. With a what-if analysis, you can compare many different scenarios against each other. Note that a what-if analysis is meant to display what the forecasting model has learned and how it will behave in the scenarios that you are evaluating. Do not blindly use the results of the what-if analysis to make business decisions. For instance, forecasts might not be accurate for novel scenarios where there is no reference available to determine whether a forecast is good. The TimeSeriesSelector object defines the items that you want in the what-if analysis.</td>
</tr>
<tr>
    <td><a href="#delete_what_if_analysis"><CopyableCode code="delete_what_if_analysis" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a what-if analysis created using the CreateWhatIfAnalysis operation. You can delete only what-if analyses that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfAnalysis operation. You can't delete a what-if analysis while any of its forecasts are being exported.</td>
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
    defaultValue="describe_what_if_analysis"
    values={[
        { label: 'describe_what_if_analysis', value: 'describe_what_if_analysis' }
    ]}
>
<TabItem value="describe_what_if_analysis">

Describes the what-if analysis created using the CreateWhatIfAnalysis operation. In addition to listing the properties provided in the CreateWhatIfAnalysis request, this operation lists the following properties: CreationTime LastModificationTime Message - If an error occurred, information about the error. Status

```sql
SELECT
CreationTime,
EstimatedTimeRemainingInMinutes,
ForecastArn,
LastModificationTime,
Message,
Status,
TimeSeriesSelector,
WhatIfAnalysisArn,
WhatIfAnalysisName
FROM aws.forecast.what_if_analysis
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_what_if_analysis"
    values={[
        { label: 'create_what_if_analysis', value: 'create_what_if_analysis' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_what_if_analysis">

What-if analysis is a scenario modeling technique where you make a hypothetical change to a time series and compare the forecasts generated by these changes against the baseline, unchanged time series. It is important to remember that the purpose of a what-if analysis is to understand how a forecast can change given different modifications to the baseline time series. For example, imagine you are a clothing retailer who is considering an end of season sale to clear space for new styles. After creating a baseline forecast, you can use a what-if analysis to investigate how different sales tactics might affect your goals. You could create a scenario where everything is given a 25% markdown, and another where everything is given a fixed dollar markdown. You could create a scenario where the sale lasts for one week and another where the sale lasts for one month. With a what-if analysis, you can compare many different scenarios against each other. Note that a what-if analysis is meant to display what the forecasting model has learned and how it will behave in the scenarios that you are evaluating. Do not blindly use the results of the what-if analysis to make business decisions. For instance, forecasts might not be accurate for novel scenarios where there is no reference available to determine whether a forecast is good. The TimeSeriesSelector object defines the items that you want in the what-if analysis.

```sql
INSERT INTO aws.forecast.what_if_analysis (
WhatIfAnalysisName,
ForecastArn,
TimeSeriesSelector,
Tags,
region
)
SELECT 
'{{ WhatIfAnalysisName }}' /* required */,
'{{ ForecastArn }}' /* required */,
'{{ TimeSeriesSelector }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
WhatIfAnalysisArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: what_if_analysis
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the what_if_analysis resource.
    - name: WhatIfAnalysisName
      value: "{{ WhatIfAnalysisName }}"
      description: |
        The name of the what-if analysis. Each name must be unique.
    - name: ForecastArn
      value: "{{ ForecastArn }}"
      description: |
        The Amazon Resource Name (ARN) of the baseline forecast.
    - name: TimeSeriesSelector
      description: |
        Defines the set of time series that are used in the what-if analysis with a TimeSeriesIdentifiers object. What-if analyses are performed only for the time series in this object. The TimeSeriesIdentifiers object needs the following information: DataSource Format Schema
      value:
        TimeSeriesIdentifiers:
          DataSource:
            S3Config:
              Path: "{{ Path }}"
              RoleArn: "{{ RoleArn }}"
              KMSKeyArn: "{{ KMSKeyArn }}"
          Schema:
            Attributes:
              - AttributeName: "{{ AttributeName }}"
                AttributeType: "{{ AttributeType }}"
          Format: "{{ Format }}"
    - name: Tags
      description: |
        A list of tags to apply to the what if forecast.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_what_if_analysis"
    values={[
        { label: 'delete_what_if_analysis', value: 'delete_what_if_analysis' }
    ]}
>
<TabItem value="delete_what_if_analysis">

Deletes a what-if analysis created using the CreateWhatIfAnalysis operation. You can delete only what-if analyses that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfAnalysis operation. You can't delete a what-if analysis while any of its forecasts are being exported.

```sql
DELETE FROM aws.forecast.what_if_analysis
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
