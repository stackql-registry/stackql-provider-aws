--- 
title: insights
hide_title: false
hide_table_of_contents: false
keywords:
  - insights
  - securityhub
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

Creates, updates, deletes, gets or lists an <code>insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="insights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_insights"
    values={[
        { label: 'get_insights', value: 'get_insights' }
    ]}
>
<TabItem value="get_insights">

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
    <td><CopyableCode code="filters" /></td>
    <td><code>object</code></td>
    <td>A collection of filters that are applied to all active findings aggregated by Security Hub CSPM. You can filter by up to ten finding attributes. For each attribute, you can provide up to 20 filter values.</td>
</tr>
<tr>
    <td><CopyableCode code="group_by_attribute" /></td>
    <td><code>string</code></td>
    <td>The grouping attribute for the insight's findings. Indicates how to group the matching findings, and identifies the type of item that the insight applies to. For example, if an insight is grouped by resource identifier, then the insight produces a list of resource identifiers. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="insight_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a Security Hub CSPM insight. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a Security Hub CSPM insight. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_insights"><CopyableCode code="get_insights" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists and describes insights for the specified insight ARNs.</td>
</tr>
<tr>
    <td><a href="#create_insight"><CopyableCode code="create_insight" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GroupByAttribute"><code>GroupByAttribute</code></a></td>
    <td></td>
    <td>Creates a custom insight in Security Hub CSPM. An insight is a consolidation of findings that relate to a security issue that requires attention or remediation. To group the related findings in the insight, use the GroupByAttribute.</td>
</tr>
<tr>
    <td><a href="#update_insight"><CopyableCode code="update_insight" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-insight_arn"><code>insight_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the Security Hub CSPM insight identified by the specified insight ARN.</td>
</tr>
<tr>
    <td><a href="#delete_insight"><CopyableCode code="delete_insight" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-insight_arn"><code>insight_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the insight specified by the InsightArn.</td>
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
<tr id="parameter-insight_arn">
    <td><CopyableCode code="insight_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the insight to delete.</td>
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
    defaultValue="get_insights"
    values={[
        { label: 'get_insights', value: 'get_insights' }
    ]}
>
<TabItem value="get_insights">

Lists and describes insights for the specified insight ARNs.

```sql
SELECT
filters,
group_by_attribute,
insight_arn,
name
FROM aws.securityhub.insights
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_insight"
    values={[
        { label: 'create_insight', value: 'create_insight' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_insight">

Creates a custom insight in Security Hub CSPM. An insight is a consolidation of findings that relate to a security issue that requires attention or remediation. To group the related findings in the insight, use the GroupByAttribute.

```sql
INSERT INTO aws.securityhub.insights (
Name,
Filters,
GroupByAttribute,
region
)
SELECT 
'{{ Name }}',
'{{ Filters }}',
'{{ GroupByAttribute }}' /* required */,
'{{ region }}'
RETURNING
insight_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: insights
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the insights resource.
    - name: Name
      value: "{{ Name }}"
    - name: Filters
      description: |
        A collection of filters that are applied to all active findings aggregated by Security Hub CSPM. You can filter by up to ten finding attributes. For each attribute, you can provide up to 20 filter values.
      value:
        ProductArn:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        AwsAccountId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        Id:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        GeneratorId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        Region:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        Type:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        FirstObservedAt:
          - Start: "{{ Start }}"
            End: "{{ End }}"
            DateRange:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
              Comparison: "{{ Comparison }}"
        LastObservedAt:
          - Start: "{{ Start }}"
            End: "{{ End }}"
            DateRange:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
              Comparison: "{{ Comparison }}"
        CreatedAt:
          - Start: "{{ Start }}"
            End: "{{ End }}"
            DateRange:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
              Comparison: "{{ Comparison }}"
        UpdatedAt:
          - Start: "{{ Start }}"
            End: "{{ End }}"
            DateRange:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
              Comparison: "{{ Comparison }}"
        SeverityProduct:
          - Gte: {{ Gte }}
            Lte: {{ Lte }}
            Eq: {{ Eq }}
            Gt: {{ Gt }}
            Lt: {{ Lt }}
        SeverityNormalized:
          - Gte: {{ Gte }}
            Lte: {{ Lte }}
            Eq: {{ Eq }}
            Gt: {{ Gt }}
            Lt: {{ Lt }}
        SeverityLabel:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        Confidence:
          - Gte: {{ Gte }}
            Lte: {{ Lte }}
            Eq: {{ Eq }}
            Gt: {{ Gt }}
            Lt: {{ Lt }}
        Criticality:
          - Gte: {{ Gte }}
            Lte: {{ Lte }}
            Eq: {{ Eq }}
            Gt: {{ Gt }}
            Lt: {{ Lt }}
        Title:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        Description:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        RecommendationText:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        SourceUrl:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ProductFields:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ProductName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        CompanyName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        UserDefinedFields:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        MalwareName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        MalwareType:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        MalwarePath:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        MalwareState:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        NetworkDirection:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        NetworkProtocol:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        NetworkSourceIpV4:
          - Cidr: "{{ Cidr }}"
        NetworkSourceIpV6:
          - Cidr: "{{ Cidr }}"
        NetworkSourcePort:
          - Gte: {{ Gte }}
            Lte: {{ Lte }}
            Eq: {{ Eq }}
            Gt: {{ Gt }}
            Lt: {{ Lt }}
        NetworkSourceDomain:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        NetworkSourceMac:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        NetworkDestinationIpV4:
          - Cidr: "{{ Cidr }}"
        NetworkDestinationIpV6:
          - Cidr: "{{ Cidr }}"
        NetworkDestinationPort:
          - Gte: {{ Gte }}
            Lte: {{ Lte }}
            Eq: {{ Eq }}
            Gt: {{ Gt }}
            Lt: {{ Lt }}
        NetworkDestinationDomain:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ProcessName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ProcessPath:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ProcessPid:
          - Gte: {{ Gte }}
            Lte: {{ Lte }}
            Eq: {{ Eq }}
            Gt: {{ Gt }}
            Lt: {{ Lt }}
        ProcessParentPid:
          - Gte: {{ Gte }}
            Lte: {{ Lte }}
            Eq: {{ Eq }}
            Gt: {{ Gt }}
            Lt: {{ Lt }}
        ProcessLaunchedAt:
          - Start: "{{ Start }}"
            End: "{{ End }}"
            DateRange:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
              Comparison: "{{ Comparison }}"
        ProcessTerminatedAt:
          - Start: "{{ Start }}"
            End: "{{ End }}"
            DateRange:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
              Comparison: "{{ Comparison }}"
        ThreatIntelIndicatorType:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ThreatIntelIndicatorValue:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ThreatIntelIndicatorCategory:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ThreatIntelIndicatorLastObservedAt:
          - Start: "{{ Start }}"
            End: "{{ End }}"
            DateRange:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
              Comparison: "{{ Comparison }}"
        ThreatIntelIndicatorSource:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ThreatIntelIndicatorSourceUrl:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceType:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourcePartition:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceRegion:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceTags:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceAwsEc2InstanceType:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceAwsEc2InstanceImageId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceAwsEc2InstanceIpV4Addresses:
          - Cidr: "{{ Cidr }}"
        ResourceAwsEc2InstanceIpV6Addresses:
          - Cidr: "{{ Cidr }}"
        ResourceAwsEc2InstanceKeyName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceAwsEc2InstanceIamInstanceProfileArn:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceAwsEc2InstanceVpcId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceAwsEc2InstanceSubnetId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceAwsEc2InstanceLaunchedAt:
          - Start: "{{ Start }}"
            End: "{{ End }}"
            DateRange:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
              Comparison: "{{ Comparison }}"
        ResourceAwsS3BucketOwnerId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceAwsS3BucketOwnerName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceAwsIamAccessKeyUserName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceAwsIamAccessKeyPrincipalName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceAwsIamAccessKeyStatus:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceAwsIamAccessKeyCreatedAt:
          - Start: "{{ Start }}"
            End: "{{ End }}"
            DateRange:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
              Comparison: "{{ Comparison }}"
        ResourceAwsIamUserUserName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceContainerName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceContainerImageId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceContainerImageName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceContainerLaunchedAt:
          - Start: "{{ Start }}"
            End: "{{ End }}"
            DateRange:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
              Comparison: "{{ Comparison }}"
        ResourceDetailsOther:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ComplianceStatus:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        VerificationState:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        WorkflowState:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        WorkflowStatus:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        RecordState:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        RelatedFindingsProductArn:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        RelatedFindingsId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        NoteText:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        NoteUpdatedAt:
          - Start: "{{ Start }}"
            End: "{{ End }}"
            DateRange:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
              Comparison: "{{ Comparison }}"
        NoteUpdatedBy:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        Keyword:
          - Value: "{{ Value }}"
        FindingProviderFieldsConfidence:
          - Gte: {{ Gte }}
            Lte: {{ Lte }}
            Eq: {{ Eq }}
            Gt: {{ Gt }}
            Lt: {{ Lt }}
        FindingProviderFieldsCriticality:
          - Gte: {{ Gte }}
            Lte: {{ Lte }}
            Eq: {{ Eq }}
            Gt: {{ Gt }}
            Lt: {{ Lt }}
        FindingProviderFieldsRelatedFindingsId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        FindingProviderFieldsRelatedFindingsProductArn:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        FindingProviderFieldsSeverityLabel:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        FindingProviderFieldsSeverityOriginal:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        FindingProviderFieldsTypes:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        Sample:
          - Value: {{ Value }}
        ComplianceSecurityControlId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ComplianceAssociatedStandardsId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        VulnerabilitiesExploitAvailable:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        VulnerabilitiesFixAvailable:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ComplianceSecurityControlParametersName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ComplianceSecurityControlParametersValue:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        AwsAccountName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceApplicationName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceApplicationArn:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceOwnerAccountId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceOwnerOrgId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceProvider:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
    - name: GroupByAttribute
      value: "{{ GroupByAttribute }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_insight"
    values={[
        { label: 'update_insight', value: 'update_insight' }
    ]}
>
<TabItem value="update_insight">

Updates the Security Hub CSPM insight identified by the specified insight ARN.

```sql
UPDATE aws.securityhub.insights
SET 
Name = '{{ Name }}',
Filters = '{{ Filters }}',
GroupByAttribute = '{{ GroupByAttribute }}'
WHERE 
insight_arn = '{{ insight_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_insight"
    values={[
        { label: 'delete_insight', value: 'delete_insight' }
    ]}
>
<TabItem value="delete_insight">

Deletes the insight specified by the InsightArn.

```sql
DELETE FROM aws.securityhub.insights
WHERE insight_arn = '{{ insight_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
