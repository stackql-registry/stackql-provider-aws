--- 
title: recommendation_limitations
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendation_limitations
  - dms
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

Creates, updates, deletes, gets or lists a <code>recommendation_limitations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommendation_limitations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.recommendation_limitations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_recommendation_limitations"
    values={[
        { label: 'describe_recommendation_limitations', value: 'describe_recommendation_limitations' }
    ]}
>
<TabItem value="describe_recommendation_limitations">

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
    <td><CopyableCode code="Limitations" /></td>
    <td><code>array</code></td>
    <td>The list of limitations for recommendations of target Amazon Web Services engines.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The unique pagination token returned for you to pass to a subsequent request. Fleet Advisor returns this token when the number of records in the response is greater than the MaxRecords value. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.</td>
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
    <td><a href="#describe_recommendation_limitations"><CopyableCode code="describe_recommendation_limitations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support. Returns a paginated list of limitations for recommendations of target Amazon Web Services engines.</td>
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
    defaultValue="describe_recommendation_limitations"
    values={[
        { label: 'describe_recommendation_limitations', value: 'describe_recommendation_limitations' }
    ]}
>
<TabItem value="describe_recommendation_limitations">

End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support. Returns a paginated list of limitations for recommendations of target Amazon Web Services engines.

```sql
SELECT
Limitations,
NextToken
FROM aws.dms.recommendation_limitations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
