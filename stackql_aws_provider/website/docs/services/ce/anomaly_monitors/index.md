--- 
title: anomaly_monitors
hide_title: false
hide_table_of_contents: false
keywords:
  - anomaly_monitors
  - ce
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

Creates, updates, deletes, gets or lists an <code>anomaly_monitors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="anomaly_monitors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.anomaly_monitors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_anomaly_monitors"
    values={[
        { label: 'get_anomaly_monitors', value: 'get_anomaly_monitors' }
    ]}
>
<TabItem value="get_anomaly_monitors">

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
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string</code></td>
    <td>The date when the monitor was created. (pattern: &lt;code&gt;(\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;)(T\d&#123;2&#125;:\d&#123;2&#125;:\d&#123;2&#125;Z)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DimensionalValueCount" /></td>
    <td><code>integer</code></td>
    <td>The value for evaluated dimensions.</td>
</tr>
<tr>
    <td><CopyableCode code="LastEvaluatedDate" /></td>
    <td><code>string</code></td>
    <td>The date when the monitor last evaluated for anomalies. (pattern: &lt;code&gt;(\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;)(T\d&#123;2&#125;:\d&#123;2&#125;:\d&#123;2&#125;Z)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedDate" /></td>
    <td><code>string</code></td>
    <td>The date when the monitor was last updated. (pattern: &lt;code&gt;(\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;)(T\d&#123;2&#125;:\d&#123;2&#125;:\d&#123;2&#125;Z)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MonitorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) value. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MonitorDimension" /></td>
    <td><code>string</code></td>
    <td>For customer managed monitors, do not specify this field. For Amazon Web Services managed monitors, this field controls which cost dimension is automatically analyzed by the monitor. For TAG and COST_CATEGORY dimensions, you must also specify MonitorSpecification to configure the specific tag or cost category key to analyze. (SERVICE, LINKED_ACCOUNT, TAG, COST_CATEGORY)</td>
</tr>
<tr>
    <td><CopyableCode code="MonitorName" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MonitorSpecification" /></td>
    <td><code>object</code></td>
    <td>An Expression object used to control what costs the monitor analyzes for anomalies. For Amazon Web Services managed monitors: If MonitorDimension is SERVICE or LINKED_ACCOUNT, do not specify this field If MonitorDimension is TAG, set this field to &#123; "Tags": &#123; "Key": "your tag key" &#125; &#125; If MonitorDimension is COST_CATEGORY, set this field to &#123; "CostCategories": &#123; "Key": "your cost category key" &#125; &#125; For customer managed monitors: To track linked accounts, set this field to &#123; "Dimensions": &#123; "Key": "LINKED_ACCOUNT", "Values": &#91; "your list of up to 10 account IDs" &#93; &#125; &#125; To track cost allocation tags, set this field to &#123; "Tags": &#123; "Key": "your tag key", "Values": &#91; "your list of up to 10 tag values" &#93; &#125; &#125; To track cost categories, set this field to&#123; "CostCategories": &#123; "Key": "your cost category key", "Values": &#91; "your cost category value" &#93; &#125; &#125;</td>
</tr>
<tr>
    <td><CopyableCode code="MonitorType" /></td>
    <td><code>string</code></td>
    <td>The type of the monitor. Set this to DIMENSIONAL for an Amazon Web Services managed monitor. Amazon Web Services managed monitors automatically track up to the top 5,000 values by cost within a dimension of your choosing. Each dimension value is evaluated independently. If you start incurring cost in a new value of your chosen dimension, it will automatically be analyzed by an Amazon Web Services managed monitor. Set this to CUSTOM for a customer managed monitor. Customer managed monitors let you select specific dimension values that get monitored in aggregate. For more information about monitor types, see Monitor types in the Billing and Cost Management User Guide. (DIMENSIONAL, CUSTOM)</td>
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
    <td><a href="#get_anomaly_monitors"><CopyableCode code="get_anomaly_monitors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs).</td>
</tr>
<tr>
    <td><a href="#create_anomaly_monitor"><CopyableCode code="create_anomaly_monitor" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AnomalyMonitor"><code>AnomalyMonitor</code></a></td>
    <td></td>
    <td>Creates a new cost anomaly detection monitor with the requested type and monitor specification.</td>
</tr>
<tr>
    <td><a href="#update_anomaly_monitor"><CopyableCode code="update_anomaly_monitor" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MonitorArn"><code>MonitorArn</code></a></td>
    <td></td>
    <td>Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past.</td>
</tr>
<tr>
    <td><a href="#delete_anomaly_monitor"><CopyableCode code="delete_anomaly_monitor" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a cost anomaly monitor.</td>
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
    defaultValue="get_anomaly_monitors"
    values={[
        { label: 'get_anomaly_monitors', value: 'get_anomaly_monitors' }
    ]}
>
<TabItem value="get_anomaly_monitors">

Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs).

```sql
SELECT
CreationDate,
DimensionalValueCount,
LastEvaluatedDate,
LastUpdatedDate,
MonitorArn,
MonitorDimension,
MonitorName,
MonitorSpecification,
MonitorType
FROM aws.ce.anomaly_monitors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_anomaly_monitor"
    values={[
        { label: 'create_anomaly_monitor', value: 'create_anomaly_monitor' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_anomaly_monitor">

Creates a new cost anomaly detection monitor with the requested type and monitor specification.

```sql
INSERT INTO aws.ce.anomaly_monitors (
AnomalyMonitor,
ResourceTags,
region
)
SELECT 
'{{ AnomalyMonitor }}' /* required */,
'{{ ResourceTags }}',
'{{ region }}'
RETURNING
MonitorArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: anomaly_monitors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the anomaly_monitors resource.
    - name: AnomalyMonitor
      description: |
        The cost anomaly detection monitor object that you want to create.
      value:
        MonitorArn: "{{ MonitorArn }}"
        MonitorName: "{{ MonitorName }}"
        CreationDate: "{{ CreationDate }}"
        LastUpdatedDate: "{{ LastUpdatedDate }}"
        LastEvaluatedDate: "{{ LastEvaluatedDate }}"
        MonitorType: "{{ MonitorType }}"
        MonitorDimension: "{{ MonitorDimension }}"
        MonitorSpecification:
          Or:
            - Or: "{{ Or }}"
              And: "{{ And }}"
              Not:
                Or:
                  - Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not:
                      Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not: "{{ Not }}"
                      Dimensions: "{{ Dimensions }}"
                      Tags: "{{ Tags }}"
                      CostCategories: "{{ CostCategories }}"
                    Dimensions:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    Tags:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    CostCategories:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                And:
                  - Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not:
                      Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not: "{{ Not }}"
                      Dimensions: "{{ Dimensions }}"
                      Tags: "{{ Tags }}"
                      CostCategories: "{{ CostCategories }}"
                    Dimensions:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    Tags:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    CostCategories:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                Not:
                  Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not: "{{ Not }}"
                  Dimensions: "{{ Dimensions }}"
                  Tags: "{{ Tags }}"
                  CostCategories: "{{ CostCategories }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
              Dimensions:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
              Tags:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
              CostCategories:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
          And:
            - Or: "{{ Or }}"
              And: "{{ And }}"
              Not:
                Or:
                  - Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not:
                      Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not: "{{ Not }}"
                      Dimensions: "{{ Dimensions }}"
                      Tags: "{{ Tags }}"
                      CostCategories: "{{ CostCategories }}"
                    Dimensions:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    Tags:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    CostCategories:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                And:
                  - Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not:
                      Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not: "{{ Not }}"
                      Dimensions: "{{ Dimensions }}"
                      Tags: "{{ Tags }}"
                      CostCategories: "{{ CostCategories }}"
                    Dimensions:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    Tags:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    CostCategories:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                Not:
                  Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not: "{{ Not }}"
                  Dimensions: "{{ Dimensions }}"
                  Tags: "{{ Tags }}"
                  CostCategories: "{{ CostCategories }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
              Dimensions:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
              Tags:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
              CostCategories:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
          Not:
            Or:
              - Or: "{{ Or }}"
                And: "{{ And }}"
                Not:
                  Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not: "{{ Not }}"
                  Dimensions: "{{ Dimensions }}"
                  Tags: "{{ Tags }}"
                  CostCategories: "{{ CostCategories }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
            And:
              - Or: "{{ Or }}"
                And: "{{ And }}"
                Not:
                  Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not: "{{ Not }}"
                  Dimensions: "{{ Dimensions }}"
                  Tags: "{{ Tags }}"
                  CostCategories: "{{ CostCategories }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
            Not:
              Or:
                - Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not:
                    Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not: "{{ Not }}"
                    Dimensions: "{{ Dimensions }}"
                    Tags: "{{ Tags }}"
                    CostCategories: "{{ CostCategories }}"
                  Dimensions:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  Tags:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  CostCategories:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
              And:
                - Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not:
                    Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not: "{{ Not }}"
                    Dimensions: "{{ Dimensions }}"
                    Tags: "{{ Tags }}"
                    CostCategories: "{{ CostCategories }}"
                  Dimensions:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  Tags:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  CostCategories:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
              Not:
                Or: "{{ Or }}"
                And: "{{ And }}"
                Not: "{{ Not }}"
                Dimensions: "{{ Dimensions }}"
                Tags: "{{ Tags }}"
                CostCategories: "{{ CostCategories }}"
              Dimensions:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
              Tags:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
              CostCategories:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
            Dimensions:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
            Tags:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
            CostCategories:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
          Dimensions:
            Key: "{{ Key }}"
            Values:
              - "{{ Values }}"
            MatchOptions:
              - "{{ MatchOptions }}"
          Tags:
            Key: "{{ Key }}"
            Values:
              - "{{ Values }}"
            MatchOptions:
              - "{{ MatchOptions }}"
          CostCategories:
            Key: "{{ Key }}"
            Values:
              - "{{ Values }}"
            MatchOptions:
              - "{{ MatchOptions }}"
        DimensionalValueCount: {{ DimensionalValueCount }}
    - name: ResourceTags
      description: |
        An optional list of tags to associate with the specified AnomalyMonitor . You can use resource tags to control access to your monitor using IAM policies. Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags: Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use The maximum length of a key is 128 characters The maximum length of a value is 256 characters Keys and values can only contain alphanumeric characters, spaces, and any of the following: _.:/=+@- Keys and values are case sensitive Keys and values are trimmed for any leading or trailing whitespaces Don’t use aws: as a prefix for your keys. This prefix is reserved for Amazon Web Services use
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_anomaly_monitor"
    values={[
        { label: 'update_anomaly_monitor', value: 'update_anomaly_monitor' }
    ]}
>
<TabItem value="update_anomaly_monitor">

Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past.

```sql
UPDATE aws.ce.anomaly_monitors
SET 
MonitorArn = '{{ MonitorArn }}',
MonitorName = '{{ MonitorName }}'
WHERE 
region = '{{ region }}' --required
AND MonitorArn = '{{ MonitorArn }}' --required
RETURNING
MonitorArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_anomaly_monitor"
    values={[
        { label: 'delete_anomaly_monitor', value: 'delete_anomaly_monitor' }
    ]}
>
<TabItem value="delete_anomaly_monitor">

Deletes a cost anomaly monitor.

```sql
DELETE FROM aws.ce.anomaly_monitors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
