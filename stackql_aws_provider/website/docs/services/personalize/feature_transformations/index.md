--- 
title: feature_transformations
hide_title: false
hide_table_of_contents: false
keywords:
  - feature_transformations
  - personalize
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

Creates, updates, deletes, gets or lists a <code>feature_transformations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="feature_transformations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize.feature_transformations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_feature_transformation"
    values={[
        { label: 'describe_feature_transformation', value: 'describe_feature_transformation' }
    ]}
>
<TabItem value="describe_feature_transformation">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the feature transformation. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date and time (in Unix time) of the feature transformation.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultParameters" /></td>
    <td><code>object</code></td>
    <td>Provides the default parameters for feature transformation.</td>
</tr>
<tr>
    <td><CopyableCode code="featureTransformationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the FeatureTransformation object. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last update date and time (in Unix time) of the feature transformation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the feature transformation. A feature transformation can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</td>
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
    <td><a href="#describe_feature_transformation"><CopyableCode code="describe_feature_transformation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the given feature transformation.</td>
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
    defaultValue="describe_feature_transformation"
    values={[
        { label: 'describe_feature_transformation', value: 'describe_feature_transformation' }
    ]}
>
<TabItem value="describe_feature_transformation">

Describes the given feature transformation.

```sql
SELECT
name,
creationDateTime,
defaultParameters,
featureTransformationArn,
lastUpdatedDateTime,
status
FROM aws.personalize.feature_transformations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
