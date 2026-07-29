--- 
title: fleet_advisor_lsa_analysis
hide_title: false
hide_table_of_contents: false
keywords:
  - fleet_advisor_lsa_analysis
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

Creates, updates, deletes, gets or lists a <code>fleet_advisor_lsa_analysis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fleet_advisor_lsa_analysis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.fleet_advisor_lsa_analysis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fleet_advisor_lsa_analysis"
    values={[
        { label: 'describe_fleet_advisor_lsa_analysis', value: 'describe_fleet_advisor_lsa_analysis' }
    ]}
>
<TabItem value="describe_fleet_advisor_lsa_analysis">

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
    <td><CopyableCode code="analysis" /></td>
    <td><code>array</code></td>
    <td>A list of FleetAdvisorLsaAnalysisResponse objects.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.</td>
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
    <td><a href="#describe_fleet_advisor_lsa_analysis"><CopyableCode code="describe_fleet_advisor_lsa_analysis" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support. Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet Advisor collectors.</td>
</tr>
<tr>
    <td><a href="#run_fleet_advisor_lsa_analysis"><CopyableCode code="run_fleet_advisor_lsa_analysis" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support. Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account.</td>
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
    defaultValue="describe_fleet_advisor_lsa_analysis"
    values={[
        { label: 'describe_fleet_advisor_lsa_analysis', value: 'describe_fleet_advisor_lsa_analysis' }
    ]}
>
<TabItem value="describe_fleet_advisor_lsa_analysis">

End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support. Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet Advisor collectors.

```sql
SELECT
analysis,
next_token
FROM aws.dms.fleet_advisor_lsa_analysis
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="run_fleet_advisor_lsa_analysis"
    values={[
        { label: 'run_fleet_advisor_lsa_analysis', value: 'run_fleet_advisor_lsa_analysis' }
    ]}
>
<TabItem value="run_fleet_advisor_lsa_analysis">

End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see Amazon Web Services DMS Fleet Advisor end of support. Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account.

```sql
EXEC aws.dms.fleet_advisor_lsa_analysis.run_fleet_advisor_lsa_analysis 
@region='{{ region }}' --required 
;
```
</TabItem>
</Tabs>
