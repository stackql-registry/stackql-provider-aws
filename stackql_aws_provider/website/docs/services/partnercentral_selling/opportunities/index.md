--- 
title: opportunities
hide_title: false
hide_table_of_contents: false
keywords:
  - opportunities
  - partnercentral_selling
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

Creates, updates, deletes, gets or lists an <code>opportunities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="opportunities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_selling.opportunities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_opportunity"
    values={[
        { label: 'get_opportunity', value: 'get_opportunity' },
        { label: 'list_opportunities', value: 'list_opportunities' }
    ]}
>
<TabItem value="get_opportunity">

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
    <td>The Amazon Resource Name (ARN) that uniquely identifies the opportunity. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>Specifies the catalog associated with the request. This field takes a string value from a predefined list: AWS or Sandbox. The catalog determines which environment the opportunity information is retrieved from. Use AWS to retrieve opportunities in the Amazon Web Services catalog, and Sandbox to retrieve opportunities in a secure and isolated testing environment. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>DateTime when the Opportunity was last created.</td>
</tr>
<tr>
    <td><CopyableCode code="customer" /></td>
    <td><code>object</code></td>
    <td>Specifies details of the customer associated with the Opportunity.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Read-only, system generated Opportunity unique identifier. (pattern: &lt;code&gt;O&#91;0-9&#93;&#123;1,19&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>DateTime when the opportunity was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="life_cycle" /></td>
    <td><code>object</code></td>
    <td>An object that contains lifecycle details for the Opportunity.</td>
</tr>
<tr>
    <td><CopyableCode code="marketing" /></td>
    <td><code>object</code></td>
    <td>An object that contains marketing details for the Opportunity.</td>
</tr>
<tr>
    <td><CopyableCode code="national_security" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the Opportunity pertains to a national security project. This field must be set to true only when the customer's industry is Government. Additional privacy and security measures apply during the review and management process for opportunities marked as NationalSecurity. (Yes, No)</td>
</tr>
<tr>
    <td><CopyableCode code="opportunity_team" /></td>
    <td><code>array</code></td>
    <td>Represents the internal team handling the opportunity. Specify the members involved in collaborating on this opportunity within the partner's organization.</td>
</tr>
<tr>
    <td><CopyableCode code="opportunity_type" /></td>
    <td><code>string</code></td>
    <td>Specifies the opportunity type as renewal, new, or expansion. Opportunity types: New opportunity: Represents a new business opportunity with a potential customer that's not previously engaged with your solutions or services. Renewal opportunity: Represents an opportunity to renew an existing contract or subscription with a current customer, which helps to ensure service continuity. Expansion opportunity: Represents an opportunity to expand the scope of a customer's contract or subscription, either by adding new services or increasing the volume of existing services. (Net New Business, Flat Renewal, Expansion)</td>
</tr>
<tr>
    <td><CopyableCode code="partner_opportunity_identifier" /></td>
    <td><code>string</code></td>
    <td>Specifies the opportunity's unique identifier in the partner's CRM system. This value is essential to track and reconcile because it's included in the outbound payload sent back to the partner. (pattern: &lt;code&gt;(?s).&#123;0,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_needs_from_aws" /></td>
    <td><code>array</code></td>
    <td>Identifies the type of support the partner needs from Amazon Web Services. Valid values: Cosell—Architectural Validation: Confirmation from Amazon Web Services that the partner's proposed solution architecture is aligned with Amazon Web Services best practices and poses minimal architectural risks. Cosell—Business Presentation: Request Amazon Web Services seller's participation in a joint customer presentation. Cosell—Competitive Information: Access to Amazon Web Services competitive resources and support for the partner's proposed solution. Cosell—Pricing Assistance: Connect with an Amazon Web Services seller for support situations where a partner may be receiving an upfront discount on a service (for example: EDP deals). Cosell—Technical Consultation: Connect with an Amazon Web Services Solutions Architect to address the partner's questions about the proposed solution. Cosell—Total Cost of Ownership Evaluation: Assistance with quoting different cost savings of proposed solutions on Amazon Web Services versus on-premises or a traditional hosting environment. Cosell—Deal Support: Request Amazon Web Services seller's support to progress the opportunity (for example: joint customer call, strategic positioning). Cosell—Support for Public Tender/RFx: Opportunity related to the public sector where the partner needs Amazon Web Services RFx support.</td>
</tr>
<tr>
    <td><CopyableCode code="project" /></td>
    <td><code>object</code></td>
    <td>An object that contains project details summary for the Opportunity.</td>
</tr>
<tr>
    <td><CopyableCode code="related_entity_identifiers" /></td>
    <td><code>object</code></td>
    <td>Provides information about the associations of other entities with the opportunity. These entities include identifiers for AWSProducts, Partner Solutions, and AWSMarketplaceOffers.</td>
</tr>
<tr>
    <td><CopyableCode code="software_revenue" /></td>
    <td><code>object</code></td>
    <td>Specifies details of a customer's procurement terms. Required only for partners in eligible programs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_opportunities">

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
    <td>The Amazon Resource Name (ARN) for the opportunity. This globally unique identifier can be used for IAM policies and cross-service references. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>Specifies the catalog associated with the opportunity, either AWS or Sandbox. This indicates the environment in which the opportunity is managed. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>DateTime when the Opportunity was last created.</td>
</tr>
<tr>
    <td><CopyableCode code="customer" /></td>
    <td><code>object</code></td>
    <td>An object that contains the Opportunity's customer details.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Read-only, system-generated Opportunity unique identifier. (pattern: &lt;code&gt;O&#91;0-9&#93;&#123;1,19&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>DateTime when the Opportunity was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="life_cycle" /></td>
    <td><code>object</code></td>
    <td>An object that contains the Opportunity's lifecycle details.</td>
</tr>
<tr>
    <td><CopyableCode code="opportunity_type" /></td>
    <td><code>string</code></td>
    <td>Specifies opportunity type as a renewal, new, or expansion. Opportunity types: New Opportunity: Represents a new business opportunity with a potential customer that's not previously engaged with your solutions or services. Renewal Opportunity: Represents an opportunity to renew an existing contract or subscription with a current customer, ensuring continuity of service. Expansion Opportunity: Represents an opportunity to expand the scope of an existing contract or subscription, either by adding new services or increasing the volume of existing services for a current customer. (Net New Business, Flat Renewal, Expansion)</td>
</tr>
<tr>
    <td><CopyableCode code="partner_opportunity_identifier" /></td>
    <td><code>string</code></td>
    <td>Specifies the Opportunity's unique identifier in the partner's CRM system. This value is essential to track and reconcile because it's included in the outbound payload sent back to the partner. It allows partners to link an opportunity to their CRM.</td>
</tr>
<tr>
    <td><CopyableCode code="project" /></td>
    <td><code>object</code></td>
    <td>An object that contains the Opportunity's project details summary.</td>
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
    <td><a href="#get_opportunity"><CopyableCode code="get_opportunity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fetches the Opportunity record from Partner Central by a given Identifier. Use the ListOpportunities action or the event notification (from Amazon EventBridge) to obtain this identifier.</td>
</tr>
<tr>
    <td><a href="#list_opportunities"><CopyableCode code="list_opportunities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This request accepts a list of filters that retrieve opportunity subsets as well as sort options. This feature is available to partners from Partner Central using the ListOpportunities API action. To synchronize your system with Amazon Web Services, list only the opportunities that were newly created or updated. We recommend you rely on events emitted by the service into your Amazon Web Services account’s Amazon EventBridge default event bus. You can also use the ListOpportunities action. We recommend the following approach: Find the latest LastModifiedDate that you stored, and only use the values that came from Amazon Web Services. Don’t use values generated by your system. When you send a ListOpportunities request, submit the date in ISO 8601 format in the AfterLastModifiedDate filter. Amazon Web Services only returns opportunities created or updated on or after that date and time. Use NextToken to iterate over all pages.</td>
</tr>
<tr>
    <td><a href="#create_opportunity"><CopyableCode code="create_opportunity" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Creates an Opportunity record in Partner Central. Use this operation to create a potential business opportunity for submission to Amazon Web Services. Creating an opportunity sets Lifecycle.ReviewStatus to Pending Submission. To submit an opportunity, follow these steps: To create the opportunity, use CreateOpportunity. To associate a solution with the opportunity, use AssociateOpportunity. To start the engagement with AWS, use StartEngagementFromOpportunity. After submission, you can't edit the opportunity until the review is complete. But opportunities in the Pending Submission state must have complete details. You can update the opportunity while it's in the Pending Submission state. There's a set of mandatory fields to create opportunities, but consider providing optional fields to enrich the opportunity record.</td>
</tr>
<tr>
    <td><a href="#associate_opportunity"><CopyableCode code="associate_opportunity" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OpportunityIdentifier"><code>OpportunityIdentifier</code></a>, <a href="#parameter-RelatedEntityType"><code>RelatedEntityType</code></a>, <a href="#parameter-RelatedEntityIdentifier"><code>RelatedEntityIdentifier</code></a></td>
    <td></td>
    <td>Enables you to create a formal association between an Opportunity and various related entities, enriching the context and details of the opportunity for better collaboration and decision making. You can associate an opportunity with the following entity types: Partner Solution: A software product or consulting practice created and delivered by Partners. Partner Solutions help customers address business challenges using Amazon Web Services services. Amazon Web Services Products: Amazon Web Services offers many products and services that provide scalable, reliable, and cost-effective infrastructure solutions. For the latest list of Amazon Web Services products, see Amazon Web Services products. Amazon Web Services Marketplace private offer: Allows Amazon Web Services Marketplace sellers to extend custom pricing and terms to individual Amazon Web Services customers. Sellers can negotiate custom prices, payment schedules, and end user license terms through private offers, enabling Amazon Web Services customers to acquire software solutions tailored to their specific needs. For more information, see Private offers in Amazon Web Services Marketplace. To obtain identifiers for these entities, use the following methods: Solution: Use the ListSolutions operation. AWS Products: For the latest list of Amazon Web Services products, see Amazon Web Services products. Amazon Web Services Marketplace private offer: Use the Using the Amazon Web Services Marketplace Catalog API to list entities. Specifically, use the ListEntities operation to retrieve a list of private offers. The request returns the details of available private offers. For more information, see ListEntities.</td>
</tr>
<tr>
    <td><a href="#assign_opportunity"><CopyableCode code="assign_opportunity" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a>, <a href="#parameter-Assignee"><code>Assignee</code></a></td>
    <td></td>
    <td>Enables you to reassign an existing Opportunity to another user within your Partner Central account. The specified user receives the opportunity, and it appears on their Partner Central dashboard, allowing them to take necessary actions or proceed with the opportunity. This is useful for distributing opportunities to the appropriate team members or departments within your organization, ensuring that each opportunity is handled by the right person. By default, the opportunity owner is the one who creates it. Currently, there's no API to enumerate the list of available users.</td>
</tr>
<tr>
    <td><a href="#update_opportunity"><CopyableCode code="update_opportunity" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LastModifiedDate"><code>LastModifiedDate</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a></td>
    <td></td>
    <td>Updates the Opportunity record identified by a given Identifier. This operation allows you to modify the details of an existing opportunity to reflect the latest information and progress. Use this action to keep the opportunity record up-to-date and accurate. When you perform updates, include the entire payload with each request. If any field is omitted, the API assumes that the field is set to null. The best practice is to always perform a GetOpportunity to retrieve the latest values, then send the complete payload with the updated values to be changed.</td>
</tr>
<tr>
    <td><a href="#disassociate_opportunity"><CopyableCode code="disassociate_opportunity" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OpportunityIdentifier"><code>OpportunityIdentifier</code></a>, <a href="#parameter-RelatedEntityType"><code>RelatedEntityType</code></a>, <a href="#parameter-RelatedEntityIdentifier"><code>RelatedEntityIdentifier</code></a></td>
    <td></td>
    <td>Allows you to remove an existing association between an Opportunity and related entities, such as a Partner Solution, Amazon Web Services product, or an Amazon Web Services Marketplace offer. This operation is the counterpart to AssociateOpportunity, and it provides flexibility to manage associations as business needs change. Use this operation to update the associations of an Opportunity due to changes in the related entities, or if an association was made in error. Ensuring accurate associations helps maintain clarity and accuracy to track and manage business opportunities. When you replace an entity, first attach the new entity and then disassociate the one to be removed, especially if it's the last remaining entity that's required.</td>
</tr>
<tr>
    <td><a href="#start_opportunity_from_engagement_task"><CopyableCode code="start_opportunity_from_engagement_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a>, <a href="#parameter-ContextIdentifier"><code>ContextIdentifier</code></a></td>
    <td></td>
    <td>This action creates an opportunity from an existing engagement context. The task is asynchronous and orchestrates the process of converting engagement contextual information into a structured opportunity record within the partner's account.</td>
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
    defaultValue="get_opportunity"
    values={[
        { label: 'get_opportunity', value: 'get_opportunity' },
        { label: 'list_opportunities', value: 'list_opportunities' }
    ]}
>
<TabItem value="get_opportunity">

Fetches the Opportunity record from Partner Central by a given Identifier. Use the ListOpportunities action or the event notification (from Amazon EventBridge) to obtain this identifier.

```sql
SELECT
arn,
catalog,
created_date,
customer,
id,
last_modified_date,
life_cycle,
marketing,
national_security,
opportunity_team,
opportunity_type,
partner_opportunity_identifier,
primary_needs_from_aws,
project,
related_entity_identifiers,
software_revenue
FROM aws.partnercentral_selling.opportunities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_opportunities">

This request accepts a list of filters that retrieve opportunity subsets as well as sort options. This feature is available to partners from Partner Central using the ListOpportunities API action. To synchronize your system with Amazon Web Services, list only the opportunities that were newly created or updated. We recommend you rely on events emitted by the service into your Amazon Web Services account’s Amazon EventBridge default event bus. You can also use the ListOpportunities action. We recommend the following approach: Find the latest LastModifiedDate that you stored, and only use the values that came from Amazon Web Services. Don’t use values generated by your system. When you send a ListOpportunities request, submit the date in ISO 8601 format in the AfterLastModifiedDate filter. Amazon Web Services only returns opportunities created or updated on or after that date and time. Use NextToken to iterate over all pages.

```sql
SELECT
arn,
catalog,
created_date,
customer,
id,
last_modified_date,
life_cycle,
opportunity_type,
partner_opportunity_identifier,
project
FROM aws.partnercentral_selling.opportunities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_opportunity"
    values={[
        { label: 'create_opportunity', value: 'create_opportunity' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_opportunity">

Creates an Opportunity record in Partner Central. Use this operation to create a potential business opportunity for submission to Amazon Web Services. Creating an opportunity sets Lifecycle.ReviewStatus to Pending Submission. To submit an opportunity, follow these steps: To create the opportunity, use CreateOpportunity. To associate a solution with the opportunity, use AssociateOpportunity. To start the engagement with AWS, use StartEngagementFromOpportunity. After submission, you can't edit the opportunity until the review is complete. But opportunities in the Pending Submission state must have complete details. You can update the opportunity while it's in the Pending Submission state. There's a set of mandatory fields to create opportunities, but consider providing optional fields to enrich the opportunity record.

```sql
INSERT INTO aws.partnercentral_selling.opportunities (
Catalog,
PrimaryNeedsFromAws,
NationalSecurity,
PartnerOpportunityIdentifier,
Customer,
Project,
OpportunityType,
Marketing,
SoftwareRevenue,
ClientToken,
LifeCycle,
Origin,
OpportunityTeam,
Tags,
region
)
SELECT 
'{{ Catalog }}',
'{{ PrimaryNeedsFromAws }}',
'{{ NationalSecurity }}',
'{{ PartnerOpportunityIdentifier }}',
'{{ Customer }}',
'{{ Project }}',
'{{ OpportunityType }}',
'{{ Marketing }}',
'{{ SoftwareRevenue }}',
'{{ ClientToken }}' /* required */,
'{{ LifeCycle }}',
'{{ Origin }}',
'{{ OpportunityTeam }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
id,
last_modified_date,
partner_opportunity_identifier
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: opportunities
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the opportunities resource.
    - name: Catalog
      value: "{{ Catalog }}"
      description: |
        Specifies the catalog associated with the request. This field takes a string value from a predefined list: AWS or Sandbox. The catalog determines which environment the opportunity is created in. Use AWS to create opportunities in the Amazon Web Services catalog, and Sandbox for testing in secure, isolated environments.
    - name: PrimaryNeedsFromAws
      value:
        - "{{ PrimaryNeedsFromAws }}"
      description: |
        Identifies the type of support the partner needs from Amazon Web Services. Valid values: Cosell—Architectural Validation: Confirmation from Amazon Web Services that the partner's proposed solution architecture is aligned with Amazon Web Services best practices and poses minimal architectural risks. Cosell—Business Presentation: Request Amazon Web Services seller's participation in a joint customer presentation. Cosell—Competitive Information: Access to Amazon Web Services competitive resources and support for the partner's proposed solution. Cosell—Pricing Assistance: Connect with an Amazon Web Services seller for support situations where a partner may be receiving an upfront discount on a service (for example: EDP deals). Cosell—Technical Consultation: Connect with an Amazon Web Services Solutions Architect to address the partner's questions about the proposed solution. Cosell—Total Cost of Ownership Evaluation: Assistance with quoting different cost savings of proposed solutions on Amazon Web Services versus on-premises or a traditional hosting environment. Cosell—Deal Support: Request Amazon Web Services seller's support to progress the opportunity (for example: joint customer call, strategic positioning). Cosell—Support for Public Tender/RFx: Opportunity related to the public sector where the partner needs Amazon Web Services RFx support.
    - name: NationalSecurity
      value: "{{ NationalSecurity }}"
      description: |
        Indicates whether the Opportunity pertains to a national security project. This field must be set to true only when the customer's industry is Government. Additional privacy and security measures apply during the review and management process for opportunities marked as NationalSecurity.
      valid_values: ['Yes', 'No']
    - name: PartnerOpportunityIdentifier
      value: "{{ PartnerOpportunityIdentifier }}"
      description: |
        Specifies the opportunity's unique identifier in the partner's CRM system. This value is essential to track and reconcile because it's included in the outbound payload to the partner. This field allows partners to link an opportunity to their CRM, which helps to ensure seamless integration and accurate synchronization between the Partner Central API and the partner's internal systems.
    - name: Customer
      description: |
        Specifies customer details associated with the Opportunity.
      value:
        Account:
          Industry: "{{ Industry }}"
          OtherIndustry: "{{ OtherIndustry }}"
          CompanyName: "{{ CompanyName }}"
          WebsiteUrl: "{{ WebsiteUrl }}"
          AwsAccountId: "{{ AwsAccountId }}"
          Address:
            City: "{{ City }}"
            PostalCode: "{{ PostalCode }}"
            StateOrRegion: "{{ StateOrRegion }}"
            CountryCode: "{{ CountryCode }}"
            StreetAddress: "{{ StreetAddress }}"
          Duns: "{{ Duns }}"
        Contacts:
          - Email: "{{ Email }}"
            FirstName: "{{ FirstName }}"
            LastName: "{{ LastName }}"
            BusinessTitle: "{{ BusinessTitle }}"
            Phone: "{{ Phone }}"
    - name: Project
      description: |
        An object that contains project details for the Opportunity.
      value:
        DeliveryModels:
          - "{{ DeliveryModels }}"
        ExpectedCustomerSpend:
          - Amount: "{{ Amount }}"
            CurrencyCode: "{{ CurrencyCode }}"
            Frequency: "{{ Frequency }}"
            TargetCompany: "{{ TargetCompany }}"
            EstimationUrl: "{{ EstimationUrl }}"
        ExpectedContractDuration:
          Term: "{{ Term }}"
          Value: "{{ Value }}"
        Title: "{{ Title }}"
        ApnPrograms:
          - "{{ ApnPrograms }}"
        CustomerBusinessProblem: "{{ CustomerBusinessProblem }}"
        CustomerUseCase: "{{ CustomerUseCase }}"
        RelatedOpportunityIdentifier: "{{ RelatedOpportunityIdentifier }}"
        SalesActivities:
          - "{{ SalesActivities }}"
        CompetitorName: "{{ CompetitorName }}"
        OtherCompetitorNames: "{{ OtherCompetitorNames }}"
        OtherSolutionDescription: "{{ OtherSolutionDescription }}"
        AdditionalComments: "{{ AdditionalComments }}"
        AwsPartition: "{{ AwsPartition }}"
    - name: OpportunityType
      value: "{{ OpportunityType }}"
      description: |
        Specifies the opportunity type as a renewal, new, or expansion. Opportunity types: New opportunity: Represents a new business opportunity with a potential customer that's not previously engaged with your solutions or services. Renewal opportunity: Represents an opportunity to renew an existing contract or subscription with a current customer, ensuring continuity of service. Expansion opportunity: Represents an opportunity to expand the scope of an existing contract or subscription, either by adding new services or increasing the volume of existing services for a current customer.
      valid_values: ['Net New Business', 'Flat Renewal', 'Expansion']
    - name: Marketing
      description: |
        This object contains marketing details and is optional for an opportunity.
      value:
        CampaignName: "{{ CampaignName }}"
        Source: "{{ Source }}"
        UseCases:
          - "{{ UseCases }}"
        Channels:
          - "{{ Channels }}"
        AwsFundingUsed: "{{ AwsFundingUsed }}"
    - name: SoftwareRevenue
      description: |
        Specifies details of a customer's procurement terms. This is required only for partners in eligible programs.
      value:
        DeliveryModel: "{{ DeliveryModel }}"
        Value:
          Amount: "{{ Amount }}"
          CurrencyCode: "{{ CurrencyCode }}"
        EffectiveDate: "{{ EffectiveDate }}"
        ExpirationDate: "{{ ExpirationDate }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Required to be unique, and should be unchanging, it can be randomly generated or a meaningful string. Default: None Best practice: To help ensure uniqueness and avoid conflicts, use a Universally Unique Identifier (UUID) as the ClientToken. You can use standard libraries from most programming languages to generate this. If you use the same client token, the API returns the following error: "Conflicting client token submitted for a new request body."
    - name: LifeCycle
      description: |
        An object that contains lifecycle details for the Opportunity.
      value:
        Stage: "{{ Stage }}"
        ClosedLostReason: "{{ ClosedLostReason }}"
        NextSteps: "{{ NextSteps }}"
        TargetCloseDate: "{{ TargetCloseDate }}"
        ReviewStatus: "{{ ReviewStatus }}"
        ReviewComments: "{{ ReviewComments }}"
        ReviewStatusReason: "{{ ReviewStatusReason }}"
        NextStepsHistory:
          - Value: "{{ Value }}"
            Time: "{{ Time }}"
    - name: Origin
      value: "{{ Origin }}"
      description: |
        Specifies the origin of the opportunity, indicating if it was sourced from Amazon Web Services or the partner. For all opportunities created with Catalog: AWS, this field must only be Partner Referral. However, when using Catalog: Sandbox, you can set this field to AWS Referral to simulate Amazon Web Services referral creation. This allows Amazon Web Services-originated flows testing in the sandbox catalog.
      valid_values: ['AWS Referral', 'Partner Referral']
    - name: OpportunityTeam
      description: |
        Represents the internal team handling the opportunity. Specify collaborating members of this opportunity who are within the partner's organization.
      value:
        - Email: "{{ Email }}"
          FirstName: "{{ FirstName }}"
          LastName: "{{ LastName }}"
          BusinessTitle: "{{ BusinessTitle }}"
          Phone: "{{ Phone }}"
    - name: Tags
      description: |
        A map of the key-value pairs of the tag or tags to assign.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_opportunity"
    values={[
        { label: 'associate_opportunity', value: 'associate_opportunity' },
        { label: 'assign_opportunity', value: 'assign_opportunity' },
        { label: 'update_opportunity', value: 'update_opportunity' }
    ]}
>
<TabItem value="associate_opportunity">

Enables you to create a formal association between an Opportunity and various related entities, enriching the context and details of the opportunity for better collaboration and decision making. You can associate an opportunity with the following entity types: Partner Solution: A software product or consulting practice created and delivered by Partners. Partner Solutions help customers address business challenges using Amazon Web Services services. Amazon Web Services Products: Amazon Web Services offers many products and services that provide scalable, reliable, and cost-effective infrastructure solutions. For the latest list of Amazon Web Services products, see Amazon Web Services products. Amazon Web Services Marketplace private offer: Allows Amazon Web Services Marketplace sellers to extend custom pricing and terms to individual Amazon Web Services customers. Sellers can negotiate custom prices, payment schedules, and end user license terms through private offers, enabling Amazon Web Services customers to acquire software solutions tailored to their specific needs. For more information, see Private offers in Amazon Web Services Marketplace. To obtain identifiers for these entities, use the following methods: Solution: Use the ListSolutions operation. AWS Products: For the latest list of Amazon Web Services products, see Amazon Web Services products. Amazon Web Services Marketplace private offer: Use the Using the Amazon Web Services Marketplace Catalog API to list entities. Specifically, use the ListEntities operation to retrieve a list of private offers. The request returns the details of available private offers. For more information, see ListEntities.

```sql
UPDATE aws.partnercentral_selling.opportunities
SET 
Catalog = '{{ Catalog }}',
OpportunityIdentifier = '{{ OpportunityIdentifier }}',
RelatedEntityType = '{{ RelatedEntityType }}',
RelatedEntityIdentifier = '{{ RelatedEntityIdentifier }}'
WHERE 
region = '{{ region }}' --required
AND OpportunityIdentifier = '{{ OpportunityIdentifier }}' --required
AND RelatedEntityType = '{{ RelatedEntityType }}' --required
AND RelatedEntityIdentifier = '{{ RelatedEntityIdentifier }}' --required;
```
</TabItem>
<TabItem value="assign_opportunity">

Enables you to reassign an existing Opportunity to another user within your Partner Central account. The specified user receives the opportunity, and it appears on their Partner Central dashboard, allowing them to take necessary actions or proceed with the opportunity. This is useful for distributing opportunities to the appropriate team members or departments within your organization, ensuring that each opportunity is handled by the right person. By default, the opportunity owner is the one who creates it. Currently, there's no API to enumerate the list of available users.

```sql
UPDATE aws.partnercentral_selling.opportunities
SET 
Catalog = '{{ Catalog }}',
Identifier = '{{ Identifier }}',
Assignee = '{{ Assignee }}'
WHERE 
region = '{{ region }}' --required
AND Identifier = '{{ Identifier }}' --required
AND Assignee = '{{ Assignee }}' --required;
```
</TabItem>
<TabItem value="update_opportunity">

Updates the Opportunity record identified by a given Identifier. This operation allows you to modify the details of an existing opportunity to reflect the latest information and progress. Use this action to keep the opportunity record up-to-date and accurate. When you perform updates, include the entire payload with each request. If any field is omitted, the API assumes that the field is set to null. The best practice is to always perform a GetOpportunity to retrieve the latest values, then send the complete payload with the updated values to be changed.

```sql
UPDATE aws.partnercentral_selling.opportunities
SET 
Catalog = '{{ Catalog }}',
PrimaryNeedsFromAws = '{{ PrimaryNeedsFromAws }}',
NationalSecurity = '{{ NationalSecurity }}',
PartnerOpportunityIdentifier = '{{ PartnerOpportunityIdentifier }}',
Customer = '{{ Customer }}',
Project = '{{ Project }}',
OpportunityType = '{{ OpportunityType }}',
Marketing = '{{ Marketing }}',
SoftwareRevenue = '{{ SoftwareRevenue }}',
LastModifiedDate = '{{ LastModifiedDate }}',
Identifier = '{{ Identifier }}',
LifeCycle = '{{ LifeCycle }}'
WHERE 
region = '{{ region }}' --required
AND LastModifiedDate = '{{ LastModifiedDate }}' --required
AND Identifier = '{{ Identifier }}' --required
RETURNING
id,
last_modified_date;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_opportunity"
    values={[
        { label: 'disassociate_opportunity', value: 'disassociate_opportunity' },
        { label: 'start_opportunity_from_engagement_task', value: 'start_opportunity_from_engagement_task' }
    ]}
>
<TabItem value="disassociate_opportunity">

Allows you to remove an existing association between an Opportunity and related entities, such as a Partner Solution, Amazon Web Services product, or an Amazon Web Services Marketplace offer. This operation is the counterpart to AssociateOpportunity, and it provides flexibility to manage associations as business needs change. Use this operation to update the associations of an Opportunity due to changes in the related entities, or if an association was made in error. Ensuring accurate associations helps maintain clarity and accuracy to track and manage business opportunities. When you replace an entity, first attach the new entity and then disassociate the one to be removed, especially if it's the last remaining entity that's required.

```sql
EXEC aws.partnercentral_selling.opportunities.disassociate_opportunity 
@region='{{ region }}' --required 
@@json=
'{
"Catalog": "{{ Catalog }}", 
"OpportunityIdentifier": "{{ OpportunityIdentifier }}", 
"RelatedEntityType": "{{ RelatedEntityType }}", 
"RelatedEntityIdentifier": "{{ RelatedEntityIdentifier }}"
}'
;
```
</TabItem>
<TabItem value="start_opportunity_from_engagement_task">

This action creates an opportunity from an existing engagement context. The task is asynchronous and orchestrates the process of converting engagement contextual information into a structured opportunity record within the partner's account.

```sql
EXEC aws.partnercentral_selling.opportunities.start_opportunity_from_engagement_task 
@region='{{ region }}' --required 
@@json=
'{
"Catalog": "{{ Catalog }}", 
"ClientToken": "{{ ClientToken }}", 
"Identifier": "{{ Identifier }}", 
"ContextIdentifier": "{{ ContextIdentifier }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
